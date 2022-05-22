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
- Tidak diperboleh diawali dengan angka, simbol selain _ dan $
- Keywords yang digunakan dalam Javascript tidak boleh digunakan sebagai nama variabel, seperti let, var, dan lainnya

Operator

Merupakan fitur atau sintaks yang digunakan untuk memanipulasi nilai, umumnya terdapat operator matematika seperti:

- Penjumlahan (+)
- Pengurangan (-)
- Perkalian (*)
- Pembagian (/)
- Modulus/sisa (%)
- Pangkat (**)
- Assignment (=)

Tipe data Primitif pada Javascript:

- Numbers = 2, -3 (decimal: integer), 22.112 (float),
- Strings (Teks) = "Hello", 'Hello', \`Hello`
- Null
- Boolearn
- Undefined

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

## 02. Percabangan, Perulangan, dan Mengatasi Error (TBA)

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
