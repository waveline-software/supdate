# sUpdate
**S**tatic **U**pdate hosting standard.

---

### Table of Contents
**Server-Side** : [Directory](#directory-layout) : [Product List](#product-list-format) : [Update List](#update-list-format) : [Metadata](#metadata-format) : [Package](#package-layout) <br>
**Client-Side** : [Library](#client-library)

---

### Directory Layout
A list (`list.json`) and all product directories are placed in the root directory. Each product directory contains an update list (`updates.json`) and all version directories. Each version directory contains a metadata file (`meta.json`) and an update package (`package.7z`).
```none
.
├── list.json
└── product
    ├── updates.json
    └── x.x.x
        ├── meta.json
        └── package.7z
```
An full example can be found [here](example).

---

### Product List Format
The product list (`list.json`) placed in the root directory contains information for what version of the standard it follows (`stdver`) and a list of products. Each item the product list (`products`) contains the name of the product (`name`), the name of it's directory (`dir`), and a 32-character long ID (`id`).
```json
{
    "stdver": [ 1, 0, 0 ],
    
    "products": [
        { "name": "Product Name", "dir": "product", "id": "00000000000000000000000000000000" }
    ]
}
```
An example can be found [here](example/list.json).

---

### Update List Format
An update list (`updates.json`) is placed in the root of each product directory and contains the version of the standard it follows (`stdver`), and a list of avaliable updates. Each item in this list of updates (`updates`), contains which version it's for (`version`), and which directory it can be found in (`dir`).
```json
{
    "stdver": [ 1, 0, 0 ],
    
    "updates": [
        { "version": [ 2, 0, 0 ], "dir":"2.0.0" }
    ]
}
```
An example can be found [here](example/speedcrunch/updates.json).

---

### Metadata Format
Each update directory contains metadata (`meta.json`). This file contains the version of the standard it follows (`stdver`), and information on the update package itself. It is required to contain the name of the executable to run (`installer`) and an SHA256 checksum of the update package (`sha256`).
```json
{
    "stdver": [ 1, 0, 0 ],
    
    "installer": "file.exe",
    "sha256": "0000000000000000000000000000000000000000000000000000000000000000"
}
```
An example can be found [here](example/npp/7.7.1/meta.json).

---

### Package Layout
Each update directory also contains a package (`package.7z`). This compressed file should contain an installer (usually `install.exe`, `setup.exe`, etc) and any other required information (like a `readme`).
```none
package.7z
├── install.exe
└── readme.txt
```
An example can be found [here](example/lmms/1.2.0/package.7z).

---

### Client Library
*Client library coming soon...*