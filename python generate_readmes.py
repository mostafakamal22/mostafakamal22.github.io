import os

# Define the base URL and excluded folders
base_url = "https://mostafakamal22.github.io"
excluded_folders = {"img", "scripts", "styles"}

# Get the current working directory
project_root = os.getcwd()

# List all first-level folders in the project directory
for folder_name in os.listdir(project_root):
    folder_path = os.path.join(project_root, folder_name)

    # Skip files and excluded folders
    if not os.path.isdir(folder_path) or folder_name in excluded_folders:
        continue

    # Create a README.md file in the folder
    readme_path = os.path.join(folder_path, "README.md")
    with open(readme_path, "w") as readme_file:
        readme_file.write("Live Demo:-\n")
        readme_file.write(f"{base_url}/{folder_name}\n")

print("README.md files created successfully!")