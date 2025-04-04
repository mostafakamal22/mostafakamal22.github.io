import os

# Get the current working directory
project_root = os.getcwd()

# Walk through the project directory
for root, dirs, files in os.walk(project_root):
    # Get the relative path of the current folder
    relative_path = os.path.relpath(root, project_root)
    
    # Skip the root folder and first-level folders
    if relative_path == "." or os.path.dirname(relative_path) == "":
        continue

    # Check for README.md in nested folders
    readme_path = os.path.join(root, "README.md")
    if os.path.isfile(readme_path):
        os.remove(readme_path)
        print(f"Deleted: {readme_path}")

print("Nested README.md files deleted successfully!")