![](https://github.com/fikrahdamar/ourjournal-app/blob/master/public/logo.png?raw=true)

# Article Directory

### Pendahuluan

OurJournal adalah aplikasi berbasis web yang memungkinkan pengguna untuk membuat, mengelola, dan membagikan artikel pribadi mereka dengan mudah. Pengguna dapat menambahkan foto, teks, dan berbagai elemen lainnya untuk membuat artikel mereka lebih menarik dan informatif. Aplikasi ini dirancang untuk memudahkan siapa saja yang ingin menulis dan berbagi ide mereka dalam format jurnal online yang terorganisir dengan baik.

### Tech Stack

- React 19
- Next.js 15
- Sanity
- TailwindCSS
- ShadCN
- TypeScript

###Fitur

- **Live Content API dengan Sanity**: Menyediakan kemampuan untuk menyimpan dan menampilkan artikel secara real-time dengan menggunakan Sanity sebagai CMS.
- **Login dengan GitHub**: Memudahkan pengguna untuk masuk dan mulai menggunakan aplikasi dengan akun GitHub mereka.
- **Pitch Submission**: Pengguna dapat mengirimkan pitch berupa title, deskripsi, dan kategori untuk artikel mereka.
- **Profil Page**: Setiap pengguna memiliki halaman profil pribadi yang menampilkan artikel dan informasi terkait.
- **Search Bar**: Memudahkan pencarian artikel berdasarkan kata kunci atau kategori.
- **Live Views Counter**: Menghitung dan menampilkan jumlah tampilan setiap artikel secara real-time.

##Setup
Pastikan telah menginstal aplikasi berikut ini pada komputer :

- [npm](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/en)
- [Git (Jika ingin fork)](https://git-scm.com/)

#####Clone Repository

```javascript
	git clone https://github.com/fikrahdamar/ourjournal-app.git
```

install project dependencies menggunakan npm:
`$ npm install`

#####Setup Environment Variables
Buat file bernama .env.local di root dan tambahkan konten dibawah

    NEXT_PUBLIC_SANITY_PROJECT_ID=
    NEXT_PUBLIC_SANITY_DATASET=
    NEXT_PUBLIC_SANITY_API_VERSION='vX'
    SANITY_TOKEN=

    AUTH_SECRET=
    AUTH_GITHUB_ID=
    AUTH_GITHUB_SECRET=

install project dependencies menggunakan npm:
`$ npm run dev`

---

> Note : Project ini adalah project yang dibuat untuk belajar (tanpa ada
> komersial ) dan source codenya kurang lebih mirip dengan yang ada di youtube youtube
