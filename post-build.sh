# Copyright 2025 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

#!/bin/bash

echo ">>>Running post-build.sh"

#!/bin/bash

# Create dist branch if it doesn't exist already
if! git show-ref --verify --quiet refs/heads/dist; then
    # Create the dist branch if it doesn't exist
    git branch dist
fi

# Checkout the dist branch
git checkout dist || git checkout -b dist

# Add and commit the changes to the dist folder
git add dist
git add index.html

# Check if there are any changes to commit
if [[ -n $(git status --porcelain) ]]; then
    git commit -m "Update dist folder"
    git push origin dist
else
    echo "No changes to commit"
fi