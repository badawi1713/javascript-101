# Catatan Belajar JavaScript

Getting Started (22/05/2022) - Target Selesai (18/06/2022)\*

Beberapa resource untuk materi dasar dari MDN:

- MDN => JavaScript Basics: <https://developer.mozilla.org/en-US/docs/Web/JavaScript>
- MDN => Variables: <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables>
- MDN => Operators: <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math>
- MDN => Functions: <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions>
- MDN => Arrays: <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays>
- MDN => Objects: <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics>

## 01. Dasar: Variabel, Tipe Data, Operator, dan Fungsi (22/05/2022)

Cara melakukan import file JavaScript pada file HTML terdapat 2 cara yang bisa dilakukan:

- import pada head
- import pada body

\*import pada head adalah halaman akan mengeksekusi file javascript terlebih dahulu, kemudian baru menampilkan konten html
sintaks import: `<script src="path_file_javascrip"></script>`

Variable dan Konstanta (Constant)
Variabel = penyimpanan data
Contoh deklarasi variabel
`let firstName = 'Dzaky'`
`var hello = 'Good Afternoon'`
`const age = 25`
keyword variabel di Javascript: var, let, & const
nama variabel = userName
tanda sama dengan (=) assignment
nilai variabel, dapat berupa berbagai tipe data

\*perbedaan keyword var, let, const:

- var bersifat global, bisa melakukan hoisting pada variabel, dan bisa melakukan re-assignment pada variabel tersebut
- let tidak bisa dideklarasikan ulang dengan nama variabel yang sama, tidak bisa melakukan hoisting pada variabel, dan bisa melakukan re-assignment pada variabel tersebut
- const, bersifat tetap, tidak bisa melakukan hoisting pada variabel, dan tidak bisa melakukan re-assignment pada variabel tersebut

Cara penamaan variabel yang standar

- Menggunakan bahasa Inggris
- Penulisannya menggunakan 'camelCase'
- Tidak diperboleh diawali dengan angka, simbol selain \_ dan $
- Keywords yang digunakan dalam Javascript tidak boleh digunakan sebagai nama variabel, seperti let, var, dan lainnya

Operator

Merupakan fitur atau sintaks yang digunakan untuk memanipulasi nilai, umumnya terdapat operator matematika seperti:

- Penjumlahan (+)
- Pengurangan (-)
- Perkalian (\*)
- Pembagian (/)
- Modulus/sisa (%)
- Pangkat (\*\*)
- Assignment (=)
- Menghitung dan menerapkan hasil pada variabel (+=, -=, \*=, /=)
- Typeof operator digunakan untuk mengetahui tipe data dari variabel (typeof username || typeof 'dzaky') // string
  typeof NaN // number
  typeof [1,2,3] // object

Tipe data Primitif pada Javascript:

- Numbers = 2, -3 (decimal: integer), 22.112 (float),
- Strings (Teks) = "Hello", 'Hello', \`Hello`
- null = bukan merupakan nilai default dari variabel, tetapi bisa di-assign ke dalam variabel sebagai nilai yang kosong/bersih
- Booleans = true/false, 0/1
- undefined = nilai default dari variabel yang tanpa diinisialisasikan

- NaN = Bukan salah satu tipe data primitif, tapi bagian dari tipe Number yang mana digunakan dalam perhitungan

Tipe data Moderen pada Javascript:

- Objects = {"key": "value"}
- Arrays = ["value", 1, 0, true, object, 200, null]

Template Literals, atau melakukan concat pada nilai string

const firstName = 'Dzaky'
const lastName = 'Badawi'

let fullName = "Hello nama saya " + firstName + " " + lastName
fullName = 'Hello nama saya ' + '"' + firstName + lastName + '"'
contoh template literal:
fullName = \`Hello nama saya ${firstName} ${lastName}`

Perbedaan menggunakan template literal dan concat string biasa adalah, template literal akan menghasilkan line-break dan tabs

\*Untuk menambahkan new line / line-break tambahkan karakter `\n`

Belajar fungsi dasar
Bahasa konstruk yang mana di dalamanya untuk mendefenisikan kode dan akan dieksekusi nantinya

Fungsi bisa memiliki parameter sebagai input (bersifat optional) dan dapat mengembalikan nilai / return value;

Penulisan fungsi:
// judul fungsi
function namaFungsi(params) {
// badan fungsi
}

Pemanggilan fungsi:
namaFungsi(args)

Variabel bayangan / shadow variabel merupakan variable lokal yang dideklarasikan secara global, namun juga bisa dideklarasikan secara block di dalam sebuah fungsi

Konversi tipe data (23/05/2022)

Segala sesuatu yang diinputkan, pada JavaScript akan selalu dikonversikan dalam bentuk String

Cara konversi string (angka) ke tipe Number:

- parseInt
- parseFloat
- Number(string-angka)
- Menambahkan operator +, contoh: +(string-angka)

Cara konversi menjadi tipe String:

- "string".toNumber()

**Note**
Sebaiknya memsiahkan variabel menjadi fungsi supaya tidak perlu berulang ulang mendeklarasikan hal yang sama

Komentar pada kode JavaScript:

- Satu baris : `// komentar kode`
- Banyak baris : `/* komentar kode */`

Cara menggunakan array:

- definisi array = kumpulan data
- contoh sederhana array; let fruits = ['apple', 'grape', 'banana']
- cara mengakses nilai pada array menggunakan [indeks]; fruits[0] //apple (indeks selalu dimulai dari 0)
- metode untuk menambahkan data ke array (push/unshift)
- fruits.push('melon') // fruits apple,grape,banana,melon
- fruits.unshift('melon') // fruits melon,apple,grape,banana

Cara menggunakan object:

- Object dapat digunakan untuk memudahkan pengelompokkan data
- contoh object, let profile = {name: 'Dzaky', age: 25}
- cara mengakses key untuk mendapatkan nilai pada key yang ada di-object bisa melalui cara; profile.name atau profile['name'] // 'dzaky'
- metode untuk menambahkan key baru pada object bisa melalui cara:
- profile.height = 5.7 // {name: 'Dzaky', age: 25, height: 5.7}
- profile['height'] = 5.7 // {name: 'Dzaky', age: 25, height: 5.7}
- profile = {...profile, newKey: value}

Mengimport script dengan baik secara 'defer' & 'async'

- import script pada bagian `<Head>`
- defer merupakan atribut pada tag script yang digunakan untuk memprioritaskan javascript di-load terlebih dahulu sebelum browser mem-parsing tampilan HTML. Defer dapat membuat script dapat diekseskusi setelah script didownload dan browser memparsing HTML, sehingga tidak menimbulkan error.
- async digunakan untuk memuat script terlebih dahulu, tetapi dengan async, script bisa langsung dieksekusi setelah selesai di-download

## 02. Percabangan, Perulangan, dan Mengatasi Error (25/05/2022)

Boolean operator:

- (==) = untuk membandingkan kesamaan 2 nilai (jika sama; true, jika tidak; false)
- (!=) = untuk membandingkan jika 2 nilai memang tidak sama
- \*rekmondasi menggunakan ini (=== dan !==) = untuk membandingkan nilai dan juga tipe data yang digunakan
- \*> & < untuk mengecek apakah nilai lebih besar / kecil (a > b / b < a)
- > = & <= untuk mengecek apakah nilai lebih besar / kecil sama dengan
- ! untuk mengecek apakah nilai tidak benar (!a)

Penggunaan if else ... untuk mengecek sebuah kondisi variabel:

if(kondisi){
// kondisi terpenuhi
} else {
// kondisi lainnya
}

if(kondisi 1){
// kondisi 1 terpenuhi
} else if(kondisi 2){
// kondisi 2 terpenuhi
} else {
// kondisi lainnya
}

**Warning**
Hati-hati terhadap perbandingan antara ARRAY dan OBJEK

contoh:

const person1 = {name: 'MAX'}
const person2 = {name: 'MAX'}
person1 === person2 // akan selalu menghasilkan nilai false, meski struktur objeknya sama
ini dikarenakan terkait penyimpanan data yang digunakan (variabel)

const person3 = person1 // menghasilkan nilai true

Menggabungkan kondisi pada percabangan:

AND operator = &&
OR operator = ||

Prioritas Operator Logik

## 03. Perkenalan JavaScript ES6 dan versi ES5 (TBA)

## 04. Mendalami Fungsi (TBA)

## 05. Mempelajari DOM (TBA)

## 06. Mendalami Array dan Perulangan Objek (TBA)

## 07. Mendalami Objek (TBA)

## 08. Mengenal Kelas dan OOP (TBA)

## 09. Mendalami Fungsi Konstruktor dan ProtoTypes (TBA)

## 10. Latihan Kelas dan OOP (TBA)

## 11. Mendalami DOM dan API dari Browser (TBA)

## 12. Mempelajari Event (TBA)

## 13. Belajar Konsep Fungsi (Tingkat Lanjut) (TBA)

## 14. Mendalami Angka dan String (TBA)

## 15. Belajar Konsep Async, Promises, dan Callback (TBA)

## 16. Bekerja dengan HTTP Request (TBA)

## 17. Bekerja dengan Menggunakan Library pada JavaScript (TBA)

## 18. Modular JavaScript (TBA)
