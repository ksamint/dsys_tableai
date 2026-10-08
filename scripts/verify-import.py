"""Verify the complete ZIP import in a Git revision (default: HEAD)."""
import argparse
import hashlib
import json
from pathlib import Path
import re
import subprocess

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--revision", default="HEAD")
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]


def read(path):
    return subprocess.check_output(
        ["git", "show", f"{args.revision}:{path}"], cwd=root
    )


receipt = json.loads(read("imports/tableai-design-system-20261008.json"))
assert len(receipt["files"]) == receipt["fileCount"]
for path, expected in receipt["files"].items():
    actual = read(path)
    assert len(actual) == expected["bytes"], f"Size mismatch: {path}"
    assert hashlib.sha256(actual).hexdigest() == expected["sha256"], path
    if path.endswith(".json"):
        json.loads(actual)

bundle = read("_ds_bundle.js").decode()
metadata = json.loads(re.match(r"/\* @ds-bundle: (.*?) \*/", bundle, re.S)[1])
manifest = json.loads(read("_ds_manifest.json"))
assert metadata["namespace"] == manifest["namespace"]
assert metadata["components"] == manifest["components"]
for path, expected in metadata["sourceHashes"].items():
    assert hashlib.sha256(read(path)).hexdigest()[:12] == expected, path
for component in manifest["components"]:
    read(component["sourcePath"])

print(
    f"PASS {args.revision}: {receipt['fileCount']} archive files match byte-for-byte; "
    f"{len(metadata['sourceHashes'])} bundle sources aligned; "
    f"{len(manifest['components'])} component exports present in manifest."
)
