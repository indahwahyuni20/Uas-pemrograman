
// Data
function enterApp() {
    const landing = document.getElementById('landing-page');
    if (landing) {
        landing.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            landing.style.display = 'none';
        }, 800);

        // Resume Audio Context on user interaction
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        SoundFx.welcome();
        setTimeout(() => speak('أَهْلًا وَسَهْلًا'), 800);
    }
}



// Story Data with Local Placeholders
const storyData = [
    {
        title: "Rumah Ahmad",
        slides: [
            {
                img: "https://raw.githubusercontent.com/indahwahyuni20/uas-pemrograman/main/assest/Ini-rumah-ahmad-rumahnya-besar-dan-indah.jpg",
                ar: "هَذَا بَيْتُ أَحْمَدَ. بَيْتُهُ كَبِيْرٌ وَجَمِيْلٌ.",
                tr: "Ini rumah Ahmad. Rumahnya besar dan indah.",
                voice: "هَذَا بَيْتُ أَحْمَدَ. بَيْتُهُ كَبِيْرٌ وَجَمِيْلٌ."
            }
        ]
    },
    {
        title: "Ayah Ahmad",
        slides: [
            {
                img: "https://raw.githubusercontent.com/indahwahyuni20/uas-pemrograman/main/assest/Ini-ayah-ahmad-dia-ada-diruang-tamu.jpg",
                ar: "هَذَا وَالِدُ أَحْمَدَ. هُوَ فِي غُرْفَةِ الْجُلُوْسِ.",
                tr: "Ini ayah Ahmad. Dia ada di ruang tamu.",
                voice: "هَذَا وَالِدُ أَحْمَدَ. هُوَ فِي غُرْفَةِ الْجُلُوْسِ."
            }
        ]
    },
    {
        title: "Ibu Ahmad",
        slides: [
            {
                img: "https://raw.githubusercontent.com/indahwahyuni20/uas-pemrograman/main/assest/Dan-ini-ibu-ahmad-dia-ada-didapur.jpg",
                ar: "وَهَذِهِ وَالِدَةُ أَحْمَدَ. هِيَ فِي الْمَطْبَخِ.",
                tr: "Dan ini ibu Ahmad. Dia ada di dapur.",
                voice: "وَهَذِهِ وَالِدَةُ أَحْمَدَ. هِيَ فِي الْمَطْبَخِ."
            }
        ]
    },
    {
        title: "Keluarga Bahagia",
        slides: [
            {
                img: "https://raw.githubusercontent.com/indahwahyuni20/uas-pemrograman/main/assest/Keluarga-ahmad-adalah-keluarga-yang-bahagia.jpg",
                ar: "أُسْرَةُ أَحْمَدَ أُسْرَةٌ سَعِيْدَةٌ.",
                tr: "Keluarga Ahmad adalah keluarga yang bahagia.",
                voice: "أُسْرَةُ أَحْمَدَ أُسْرَةٌ سَعِيْدَةٌ."
            }
        ]
    },
    {
        title: "Murid di Sekolah",
        slides: [
            {
                img: "https://raw.githubusercontent.com/indahwahyuni20/uas-pemrograman/main/assest/Saya-seorang-murid-disekolah.jpg",
                ar: "أَنَا طَالِبٌ فِي الْمَدْرَسَةِ.",
                tr: "Saya seorang murid di sekolah.",
                voice: "أَنَا طَالِبٌ فِي الْمَدْرَسَةِ."
            }
        ]
    },
    {
        title: "Seragam Sekolah",
        slides: [
            {
                img: "https://raw.githubusercontent.com/indahwahyuni20/uas-pemrograman/main/assest/Saya-memakai-seragam-sekolah.jpg",
                ar: "أَلْبَسُ مَلَابِسَ الْمَدْرَسَةِ.",
                tr: "Saya memakai seragam sekolah.",
                voice: "أَلْبَسُ مَلَابِسَ الْمَدْرَسَةِ"
            }
        ]
    },
    {
        title: "Bermain Bola",
        slides: [
            {
                img: "https://raw.githubusercontent.com/indahwahyuni20/uas-pemrograman/main/assest/Saya-bermain-sepak-bola.jpg",
                ar: "أَلْعَبُ كُرَةَ الْقَدَمِ",
                tr: "Saya bermain sepak bola.",
                voice: "أَلْعَبُ كُرَةَ الْقَدَمِ"
            }
        ]
    },
    {
        title: "Pohon Mangga",
        slides: [
            {
                img: "https://raw.githubusercontent.com/indahwahyuni20/uas-pemrograman/main/assest/Ini-pohon-mangga.jpg",
                ar: "هَذِهِ شَجَرَةُ الْمَانْجُو",
                tr: "Ini pohon mangga.",
                voice: "هَذِهِ شَجَرَةُ الْمَانْجُو"
            }
        ]
    },
    {
        title: "Pergi ke Pantai",
        slides: [
            {
                img: "https://raw.githubusercontent.com/indahwahyuni20/uas-pemrograman/main/assest/Kami-pergi-kepantai.jpg",
                ar: "نَذْهَبُ إِلَى الشَّاطِئِ",
                tr: "Kami pergi ke pantai.",
                voice: "نَذْهَبُ إِلَى الشَّاطِئِ"
            }
        ]
    },
    {
        title: "Laut Indah",
        slides: [
            {
                img: "https://raw.githubusercontent.com/indahwahyuni20/uas-pemrograman/main/assest/Laut-itu-luas-dan-indah.jpg",
                ar: "الْبَحْرُ وَاسِعٌ وَجَمِيْلٌ",
                tr: "Laut itu luas dan indah.",
                voice: "الْبَحْرُ وَاسِعٌ وَجَمِيْلٌ"
            }
        ]
    }
];

// Re-initialize State
let currentStoryIndex = 0;
let currentSlideIndex = 0;

const hijaiyahData = [
    { char: 'ا', name: 'Alif', trans: 'aa' },
    { char: 'ب', name: 'Ba', trans: 'b' },
    { char: 'ت', name: 'Ta', trans: 't' },
    { char: 'ث', name: 'Tsa', trans: 'ts' },
    { char: 'ج', name: 'Jim', trans: 'j' },
    { char: 'ح', name: 'Ha', trans: 'h' },
    { char: 'خ', name: 'Kho', trans: 'kh' },
    { char: 'د', name: 'Dal', trans: 'd' },
    { char: 'ذ', name: 'Dzal', trans: 'dz' },
    { char: 'ر', name: 'Ro', trans: 'r' },
    { char: 'ز', name: 'Zai', trans: 'z' },
    { char: 'س', name: 'Sin', trans: 's' },
    { char: 'ش', name: 'Syin', trans: 'sy' },
    { char: 'ص', name: 'Shod', trans: 'sh' },
    { char: 'ض', name: 'Dhod', trans: 'dh' },
    { char: 'ط', name: 'Tho', trans: 'th' },
    { char: 'ظ', name: 'Zho', trans: 'zh' },
    { char: 'ع', name: "'Ain", trans: "'" },
    { char: 'غ', name: "Ghain", trans: "gh" },
    { char: 'ف', name: 'Fa', trans: 'f' },

    { char: 'ق', name: 'Qof', trans: 'q' },
    { char: 'ك', name: 'Kaf', trans: 'k' },
    { char: 'ل', name: 'Lam', trans: 'l' },

    { char: 'م', name: 'Mim', trans: 'm' },
    { char: 'ن', name: 'Nun', trans: 'n' },
    { char: 'و', name: 'Wawu', trans: 'w' },
    { char: 'ه', name: 'Ha', trans: 'h' },
    { char: 'ء', name: 'Hamzah', trans: "'" },
    { char: 'ي', name: 'Ya', trans: 'y' }
].filter(x => x.char.length === 1); // Clean up duplicate keys I might have typed

const vocabData = [
    // Sekolah (School)
    { ar: 'كِتَابٌ', tr: 'Buku', reading: 'Kitaabun' },
    { ar: 'قَلَمٌ', tr: 'Pena', reading: 'Qolamun' },
    { ar: 'مَدْرَسَةٌ', tr: 'Sekolah', reading: 'Madrasatun' },
    { ar: 'فَصْلٌ', tr: 'Kelas', reading: 'Fashlun' },
    { ar: 'سَبُّورَةٌ', tr: 'Papan Tulis', reading: 'Sabbuuratun' },
    { ar: 'مَكْتَبٌ', tr: 'Meja', reading: 'Maktabun' },
    { ar: 'كُرْسِيٌّ', tr: 'Kursi', reading: 'Kursiyyun' },
    { ar: 'حَقِيْبَةٌ', tr: 'Tas', reading: 'Haqiibatun' },
    { ar: 'مِسْطَرَةٌ', tr: 'Penggaris', reading: 'Misthorotun' },
    { ar: 'مِمْحَاةٌ', tr: 'Penghapus', reading: 'Mimhaatun' },
    { ar: 'قَلَمُ الرَّصَاصِ', tr: 'Pensil', reading: 'Qolamur Roshos' },
    { ar: 'بَرَّايَةٌ', tr: 'Rautan', reading: 'Barroyatun' },
    { ar: 'زِيٌّ', tr: 'Seragam', reading: 'Ziyyun' },
    { ar: 'جَوْرَبٌ', tr: 'Kaos Kaki', reading: 'Jaurobun' },
    { ar: 'حِذَاءٌ', tr: 'Sepatu', reading: 'Hidzaaun' },

    // Rumah (Home)
    { ar: 'بَيْتٌ', tr: 'Rumah', reading: 'Baitun' },
    { ar: 'بَابٌ', tr: 'Pintu', reading: 'Baabun' },
    { ar: 'نَافِذَةٌ', tr: 'Jendela', reading: 'Naafidzatun' },
    { ar: 'غُرْفَةٌ', tr: 'Kamar', reading: 'Ghurfatun' },
    { ar: 'فِرَاشٌ', tr: 'Kasur', reading: 'Firosyun' },
    { ar: 'وِسَادَةٌ', tr: 'Bantal', reading: 'Wisaadatun' },
    { ar: 'خِزَانَةٌ', tr: 'Lemari', reading: 'Khizanatun' },
    { ar: 'مِرْآةٌ', tr: 'Cermin', reading: 'Mir-aatun' },
    { ar: 'مِصْبَاحٌ', tr: 'Lampu', reading: 'Mishbaahun' },
    { ar: 'سَاعَةٌ', tr: 'Jam', reading: 'Saa\'atun' },
    { ar: 'حَمَّامٌ', tr: 'Kamar Mandi', reading: 'Hammamun' },
    { ar: 'مَطْبَخٌ', tr: 'Dapur', reading: 'Matbakhun' },
    { ar: 'صَحْنٌ', tr: 'Piring', reading: 'Shahnun' },
    { ar: 'كُوْبٌ', tr: 'Gelas', reading: 'Kuubun' },
    { ar: 'مِلْعَقَةٌ', tr: 'Sendok', reading: 'Mil\'aqatun' },

    // Alam & Hewan (Nature & Animals)
    { ar: 'شَمْسٌ', tr: 'Matahari', reading: 'Syamsun' },
    { ar: 'قَمَرٌ', tr: 'Bulan', reading: 'Qomarun' },
    { ar: 'نَجْمٌ', tr: 'Bintang', reading: 'Najmun' },
    { ar: 'سَمَاءٌ', tr: 'Langit', reading: 'Samaa-un' },
    { ar: 'أَرْضٌ', tr: 'Bumi', reading: 'Ardhun' },
    { ar: 'شَجَرَةٌ', tr: 'Pohon', reading: 'Syajarotun' },
    { ar: 'زَهْرَةٌ', tr: 'Bunga', reading: 'Zahrotun' },
    { ar: 'مَاءٌ', tr: 'Air', reading: 'Maa-un' },
    { ar: 'قِطٌّ', tr: 'Kucing', reading: 'Qittun' },
    { ar: 'طَائِرٌ', tr: 'Burung', reading: 'Thoo-irun' },
    { ar: 'سَمَكٌ', tr: 'Ikan', reading: 'Samakun' },
    { ar: 'بَقَرَةٌ', tr: 'Sapi', reading: 'Baqorotun' },
    { ar: 'غَنَمٌ', tr: 'Kambing', reading: 'Ghonamun' },
    { ar: 'أَسَدٌ', tr: 'Singa', reading: 'Asadun' },
    { ar: 'فِيْلٌ', tr: 'Gajah', reading: 'Fiilun' },

    // Keluarga & Profesi (Family & Profession)
    { ar: 'أَبٌ', tr: 'Ayah', reading: 'Abun' },
    { ar: 'أُمٌّ', tr: 'Ibu', reading: 'Ummun' },
    { ar: 'أَخٌ', tr: 'Saudara Lk', reading: 'Akhun' },
    { ar: 'أُخْتٌ', tr: 'Saudara Pr', reading: 'Ukhtun' },
    { ar: 'جَدٌّ', tr: 'Kakek', reading: 'Jaddun' },
    { ar: 'جَدَّةٌ', tr: 'Nenek', reading: 'Jaddatun' },
    { ar: 'أُسْتَاذٌ', tr: 'Guru', reading: 'Ustadzun' },
    { ar: 'تِلْمِيْذٌ', tr: 'Murid', reading: 'Tilmiidzun' },
    { ar: 'طَبِيْبٌ', tr: 'Dokter', reading: 'Thobiibun' },
    { ar: 'شُرْطِيٌّ', tr: 'Polisi', reading: 'Syurthiyyun' },
    { ar: 'تَاجِرٌ', tr: 'Pedagang', reading: 'Taajirun' },
    { ar: 'مُهَنْدِسٌ', tr: 'Insinyur', reading: 'Muhandisun' },
    { ar: 'فَلَّاحٌ', tr: 'Petani', reading: 'Fallaahun' },

    // Warna (Colors)
    { ar: 'أَبْيَضُ', tr: 'Putih', reading: 'Abyadhu' },
    { ar: 'أَسْوَدُ', tr: 'Hitam', reading: 'Aswadu' },
    { ar: 'أَحْمَرُ', tr: 'Merah', reading: 'Ahmaru' },
    { ar: 'أَخْضَرُ', tr: 'Hijau', reading: 'Akhdharu' },
    { ar: 'أَزْرَقُ', tr: 'Biru', reading: 'Azraqu' },
    { ar: 'أَصْفَرُ', tr: 'Kuning', reading: 'Ashfaru' },

    // Angka (Numbers 1-10)
    { ar: 'وَاحِدٌ', tr: 'Satu', reading: 'Waahidun' },
    { ar: 'اِثْنَانِ', tr: 'Dua', reading: 'Itsnaani' },
    { ar: 'ثَلَاثَةٌ', tr: 'Tiga', reading: 'Tsalaatsatun' },
    { ar: 'أَرْبَعَةٌ', tr: 'Empat', reading: 'Arba\'atun' },
    { ar: 'خَمْسَةٌ', tr: 'Lima', reading: 'Khamsatun' },
    { ar: 'سِتَّةٌ', tr: 'Enam', reading: 'Sittatun' },
    { ar: 'سَبْعَةٌ', tr: 'Tujuh', reading: 'Sab\'atun' },
    { ar: 'ثَمَانِيَةٌ', tr: 'Delapan', reading: 'Tsamaaniyatun' },
    { ar: 'تِسْعَةٌ', tr: 'Sembilan', reading: 'Tis\'atun' },
    { ar: 'عَشَرَةٌ', tr: 'Sepuluh', reading: '\'Asyaratun' },

    // Anggota Tubuh (Body Parts)
    { ar: 'رَأْسٌ', tr: 'Kepala', reading: 'Ra\'sun' },
    { ar: 'عَيْنٌ', tr: 'Mata', reading: '\'Ainun' },
    { ar: 'أَنْفٌ', tr: 'Hidung', reading: 'Anfun' },
    { ar: 'فَمٌ', tr: 'Mulut', reading: 'Famun' },
    { ar: 'أُذُنٌ', tr: 'Telinga', reading: 'Udzunun' },
    { ar: 'يَدٌ', tr: 'Tangan', reading: 'Yadun' },
    { ar: 'رِجْلٌ', tr: 'Kaki', reading: 'Rijlun' },
    { ar: 'شَعْرٌ', tr: 'Rambut', reading: 'Sya\'run' },
    { ar: 'بَطْنٌ', tr: 'Perut', reading: 'Bathnun' },
    { ar: 'سِنٌّ', tr: 'Gigi', reading: 'Sinnun' },

    // Makanan & Minuman (Food & Drink)
    { ar: 'طَعَامٌ', tr: 'Makanan', reading: 'Tha\'aamun' },
    { ar: 'شَرَابٌ', tr: 'Minuman', reading: 'Syaraabun' },
    { ar: 'رُزٌّ', tr: 'Nasi', reading: 'Ruzzun' },
    { ar: 'خُبْزٌ', tr: 'Roti', reading: 'Khubzun' },
    { ar: 'لَحْمٌ', tr: 'Daging', reading: 'Lahmun' },
    { ar: 'سَمَكٌ', tr: 'Ikan', reading: 'Samakun' },
    { ar: 'بَيْضَةٌ', tr: 'Telur', reading: 'Baidhatun' },
    { ar: 'مَاءٌ', tr: 'Air', reading: 'Maa\'un' },
    { ar: 'لَبَنٌ', tr: 'Susu', reading: 'Labanun' },
    { ar: 'قَهْوَةٌ', tr: 'Kopi', reading: 'Qahwatun' },
    { ar: 'شَايٌ', tr: 'Teh', reading: 'Syaayun' },
    { ar: 'فَاكِهَةٌ', tr: 'Buah', reading: 'Faakihatun' },

    // Pakaian (Clothing)
    { ar: 'ثَوْبٌ', tr: 'Baju/Gamis', reading: 'Tsaubun' },
    { ar: 'قَمِيْصٌ', tr: 'Kemeja', reading: 'Qamiishun' },
    { ar: 'سِرْوَالٌ', tr: 'Celana', reading: 'Sirwaalun' },
    { ar: 'حِذَاءٌ', tr: 'Sepatu', reading: 'Hidzaa\'un' },
    { ar: 'جَوْرَبٌ', tr: 'Kaos Kaki', reading: 'Jaurabun' },
    { ar: 'قَلَنْسُوَةٌ', tr: 'Peci', reading: 'Qalansuwah' },
    { ar: 'حِجَابٌ', tr: 'Jilbab', reading: 'Hijaabun' },
    { ar: 'نَظَّارَةٌ', tr: 'Kacamata', reading: 'Nazhzhaaratun' },

    // Kata Sifat (Adjectives)
    { ar: 'كَبِيْرٌ', tr: 'Besar', reading: 'Kabiirun' },
    { ar: 'صَغِيْرٌ', tr: 'Kecil', reading: 'Shaghiirun' },
    { ar: 'جَمِيْلٌ', tr: 'Indah/Bagus', reading: 'Jamiilun' },
    { ar: 'جَدِيْدٌ', tr: 'Baru', reading: 'Jadiidun' },
    { ar: 'قَدِيْمٌ', tr: 'Lama', reading: 'Qadiimun' },
    { ar: 'نَظِيْفٌ', tr: 'Bersih', reading: 'Nazhiifun' },
    { ar: 'وَسِخٌ', tr: 'Kotor', reading: 'Wasikhun' },
    { ar: 'سَرِيْعٌ', tr: 'Cepat', reading: 'Sarii\'un' },
    { ar: 'بَطِيْءٌ', tr: 'Lambat', reading: 'Bathii\'un' },
    { ar: 'طَوِيْلٌ', tr: 'Panjang/Tinggi', reading: 'Thawiilun' },
    { ar: 'قَصِيْرٌ', tr: 'Pendek', reading: 'Qashiirun' },
    { ar: 'غَالٍ', tr: 'Mahal', reading: 'Ghaalin' },
    { ar: 'رَخِيْصٌ', tr: 'Murah', reading: 'Rakhiishun' },

    // Kata Kerja Dasar (Basic Verbs)
    { ar: 'أَكَلَ', tr: 'Makan', reading: 'Akala' },
    { ar: 'شَرِبَ', tr: 'Minum', reading: 'Syariba' },
    { ar: 'قَرَأَ', tr: 'Membaca', reading: 'Qara\'a' },
    { ar: 'كَتَبَ', tr: 'Menulis', reading: 'Kataba' },
    { ar: 'ذَهَبَ', tr: 'Pergi', reading: 'Dzahaba' },
    { ar: 'رَجَعَ', tr: 'Pulang', reading: 'Raja\'a' },
    { ar: 'جَلَسَ', tr: 'Duduk', reading: 'Jalasa' },
    { ar: 'قَامَ', tr: 'Berdiri', reading: 'Qaama' },
    { ar: 'نَامَ', tr: 'Tidur', reading: 'Naama' },
    { ar: 'غَسَلَ', tr: 'Mencuci', reading: 'Ghasala' },

    // Waktu (Time)
    { ar: 'يَوْمٌ', tr: 'Hari', reading: 'Yaumun' },
    { ar: 'أُسْبُوْعٌ', tr: 'Minggu (Pekan)', reading: 'Usbuu\'un' },
    { ar: 'شَهْرٌ', tr: 'Bulan', reading: 'Syahrun' },
    { ar: 'سَنَةٌ', tr: 'Tahun', reading: 'Sanatun' },
    { ar: 'صَبَاحٌ', tr: 'Pagi', reading: 'Shabaahun' },
    { ar: 'نَهَارٌ', tr: 'Siang', reading: 'Nahaarun' },
    { ar: 'مَسَاءٌ', tr: 'Sore', reading: 'Masaa\'un' },
    { ar: 'لَيْلٌ', tr: 'Malam', reading: 'Lailun' },
    { ar: 'سَاعَةٌ', tr: 'Jam', reading: 'Saa\'atun' },

    // Tempat Umum (Public Places)
    { ar: 'مَسْجِدٌ', tr: 'Masjid', reading: 'Masjidun' },
    { ar: 'سُوْقٌ', tr: 'Pasar', reading: 'Suuqun' },
    { ar: 'مُسْتَشْفَى', tr: 'Rumah Sakit', reading: 'Mustasyfaa' },
    { ar: 'مَطَارٌ', tr: 'Bandara', reading: 'Mathaarun' },
    { ar: 'مَحَطَّةٌ', tr: 'Stasiun/Terminal', reading: 'Mahaththatun' },
    { ar: 'مَكْتَبَةٌ', tr: 'Perpustakaan', reading: 'Maktabatun' },
    { ar: 'حَدِيْقَةٌ', tr: 'Taman', reading: 'Hadiiqatun' },
    { ar: 'شَارِعٌ', tr: 'Jalan', reading: 'Syaari\'un' },

    // Transportasi (Transportation)
    { ar: 'سَيَّارَةٌ', tr: 'Mobil', reading: 'Sayyaaratun' },
    { ar: 'دَرَّاجَةٌ', tr: 'Sepeda', reading: 'Darraajatun' },
    { ar: 'جَوَّالَةٌ', tr: 'Sepeda Motor', reading: 'Jawwaalatun' },
    { ar: 'حَافِلَةٌ', tr: 'Bus', reading: 'Haafilatun' },
    { ar: 'قِطَارٌ', tr: 'Kereta', reading: 'Qithaarun' },
    { ar: 'طَائِرَةٌ', tr: 'Pesawat', reading: 'Thaa\'iratun' },
    { ar: 'سَفِيْنَةٌ', tr: 'Kapal', reading: 'Safiinatun' },

    // Arah (Direction)
    { ar: 'أَمَامَ', tr: 'Di Depan', reading: 'Amaama' },
    { ar: 'وَرَاءَ', tr: 'Di Belakang', reading: 'Waraa\'a' },
    { ar: 'فَوْقَ', tr: 'Di Atas', reading: 'Fauqa' },
    { ar: 'تَحْتَ', tr: 'Di Bawah', reading: 'Tahta' },
    { ar: 'يَمِيْن', tr: 'Kanan', reading: 'Yamiin' },
    { ar: 'يَسَار', tr: 'Kiri', reading: 'Yasaar' },

    // Hewan (Animals)
    { ar: 'أَسَدٌ', tr: 'Singa', reading: 'Asadun' },
    { ar: 'نَمِرٌ', tr: 'Harimau', reading: 'Namirun' },
    { ar: 'فِيْلٌ', tr: 'Gajah', reading: 'Fiilun' },
    { ar: 'جَمَلٌ', tr: 'Unta', reading: 'Jamalun' },
    { ar: 'قِطٌّ', tr: 'Kucing', reading: 'Qiththun' },
    { ar: 'كَلْبٌ', tr: 'Anjing', reading: 'Kalbun' },
    { ar: 'حِصَانٌ', tr: 'Kuda', reading: 'Hishoonun' },
    { ar: 'حِمَارٌ', tr: 'Keledai', reading: 'Himaarun' },
    { ar: 'بَقَرَةٌ', tr: 'Sapi', reading: 'Baqoratun' },
    { ar: 'غَنَمٌ', tr: 'Kambing/Domba', reading: 'Ghonamun' },
    { ar: 'دَجَاجَةٌ', tr: 'Ayam Betina', reading: 'Dajaajatun' },
    { ar: 'دِيْكٌ', tr: 'Ayam Jago', reading: 'Diikun' },
    { ar: 'بَطَّةٌ', tr: 'Bebek', reading: 'Baththatun' },
    { ar: 'طَائِرٌ', tr: 'Burung', reading: 'Thoo\'irun' },
    { ar: 'سَمَكٌ', tr: 'Ikan', reading: 'Samakun' },
    { ar: 'نَمْلَةٌ', tr: 'Semut', reading: 'Namlatun' },
    { ar: 'نَحْلَةٌ', tr: 'Lebah', reading: 'Nahlatun' },
    { ar: 'بَعُوْضَةٌ', tr: 'Nyamuk', reading: 'Ba\'uudhatun' },
    { ar: 'ذُبَابَةٌ', tr: 'Lalat', reading: 'Dzubaabatun' },
    { ar: 'عَنْكَبُوْتٌ', tr: 'Laba-laba', reading: '\'Ankabuutun' },
    { ar: 'فَرَاشَةٌ', tr: 'Kupu-kupu', reading: 'Faroosyatun' },
    { ar: 'ثُعْبَانٌ', tr: 'Ular', reading: 'Tsu\'baanun' },
    { ar: 'عَقْرَبٌ', tr: 'Kalajengking', reading: '\'Aqrobun' },
    { ar: 'قِرْدٌ', tr: 'Monyet', reading: 'Qirdun' },
    { ar: 'خِنْزِيْرٌ', tr: 'Babi', reading: 'Khinziirun' },
    { ar: 'دُبٌّ', tr: 'Beruang', reading: 'Dubbun' },
    { ar: 'ذِئْبٌ', tr: 'Serigala', reading: 'Dzi\'bun' },
    { ar: 'ثَعْلَبٌ', tr: 'Rubah', reading: 'Tsa\'labun' },
    { ar: 'أَرْنَبٌ', tr: 'Kelinci', reading: 'Arnabun' },
    { ar: 'فَأْرٌ', tr: 'Tikus', reading: 'Fa\'run' },
    { ar: 'تِمْسَاحٌ', tr: 'Buaya', reading: 'Timsaahun' },
    { ar: 'سُلَحْفَاةٌ', tr: 'Kura-kura', reading: 'Sulahfaatun' },
    { ar: 'ضِفْدَعٌ', tr: 'Katak', reading: 'Dhifda\'un' },
    { ar: 'حُوْتٌ', tr: 'Paus', reading: 'Huutun' },
    { ar: 'قِرْشٌ', tr: 'Hiu', reading: 'Qirsyun' },
    { ar: 'دُلْفِيْن', tr: 'Lumba-lumba', reading: 'Dulfiin' },
    { ar: 'نَسْرٌ', tr: 'Elang', reading: 'Nasrun' },
    { ar: 'بُوْمَةٌ', tr: 'Burung Hantu', reading: 'Buumatun' },
    { ar: 'حَمَامَةٌ', tr: 'Merpati', reading: 'Hamaamatun' },
    { ar: 'غُرَابٌ', tr: 'Gagak', reading: 'Ghuroobun' },
    { ar: 'طَاوُوْسٌ', tr: 'Merak', reading: 'Thoomwuusun' },
    { ar: 'زَرَافَةٌ', tr: 'Jerapah', reading: 'Zaroofatun' },
    { ar: 'غَزَالٌ', tr: 'Rusa', reading: 'Ghozaalun' },
    { ar: 'جَامُوْسٌ', tr: 'Kerbau', reading: 'Jaamuusun' },
    { ar: 'خُفَّاشٌ', tr: 'Kelelawar', reading: 'Khuffaasyun' },
    { ar: 'دُوْدَةٌ', tr: 'Cacing', reading: 'Duudatun' },

    // Buah-buahan (Fruits)
    { ar: 'تَمْرٌ', tr: 'Kurma', reading: 'Tamrun' },
    { ar: 'عِنَبٌ', tr: 'Anggur', reading: '\'Inabun' },
    { ar: 'تُفَّاحٌ', tr: 'Apel', reading: 'Tuffaahun' },
    { ar: 'بُرْتُقَالٌ', tr: 'Jeruk', reading: 'Burtuqoolun' },
    { ar: 'مَوْزٌ', tr: 'Pisang', reading: 'Mauzun' },
    { ar: 'بِطِّيْخٌ', tr: 'Semangka', reading: 'Biththiikhun' },
    { ar: 'شَمَّامٌ', tr: 'Melon', reading: 'Syammaamun' },
    { ar: 'رُمَّانٌ', tr: 'Delima', reading: 'Rummaanun' },
    { ar: 'تِيْنٌ', tr: 'Ara (Tin)', reading: 'Tiinun' },
    { ar: 'زَيْتُوْنٌ', tr: 'Zaitun', reading: 'Zaituun' },
    { ar: 'فَرَاوِلَةٌ', tr: 'Stroberi', reading: 'Farowlah' },
    { ar: 'أَنَانَاسٌ', tr: 'Nanas', reading: 'Anaanaas' },
    { ar: 'مَانْجُو', tr: 'Mangga', reading: 'Maanjuu' },
    { ar: 'لَيْمُوْنٌ', tr: 'Lemon', reading: 'Laimuunun' },
    { ar: 'جَوْزُ الْهِنْدِ', tr: 'Kelapa', reading: 'Jauzul Hindi' },
    { ar: 'جُوَافَةٌ', tr: 'Jambu Biji', reading: 'Juwaafah' },
    { ar: 'بَابَايَا', tr: 'Pepaya', reading: 'Baabaayaa' },
    { ar: 'كَرَزٌ', tr: 'Ceri', reading: 'Karazun' },
    { ar: 'كُمِثْرَى', tr: 'Pir', reading: 'Kumitsroo' },
    { ar: 'خُوْخٌ', tr: 'Persik', reading: 'Khuukhun' },
    { ar: 'مِشْمِشٌ', tr: 'Aprikot', reading: 'Mishmishun' },
    { ar: 'أَفُوكَادُو', tr: 'Alpukat', reading: 'Afuukaaduu' },
    { ar: 'كِيْوِي', tr: 'Kiwi', reading: 'Kiiwii' },

    // Cuaca (Weather)
    { ar: 'مَطَرٌ', tr: 'Hujan', reading: 'Matharun' },
    { ar: 'سَحَابٌ', tr: 'Awan', reading: 'Sahaabun' },
    { ar: 'رِيْحٌ', tr: 'Angin', reading: 'Riihun' },
    { ar: 'ثَلْجٌ', tr: 'Salju', reading: 'Tsaljun' },
    { ar: 'حَارٌّ', tr: 'Panas', reading: 'Haarrun' },
    { ar: 'بَارِدٌ', tr: 'Dingin', reading: 'Baaridun' },

    // Perasaan (Emotions)
    { ar: 'سَعِيْدٌ', tr: 'Senang', reading: 'Sa\'iidun' },
    { ar: 'حَزِيْنٌ', tr: 'Sedih', reading: 'Haziinun' },
    { ar: 'غَضْبَانُ', tr: 'Marah', reading: 'Ghadbanu' },
    { ar: 'خَائِفٌ', tr: 'Takut', reading: 'Khaa\'ifun' },
    { ar: 'جَوْعَانُ', tr: 'Lapar', reading: 'Jau\'aanu' },
    { ar: 'عَطْشَانُ', tr: 'Haus', reading: '\'Atsyaanu' },

    // Tempat 2 (Part of House/Building)
    { ar: 'سَقْفٌ', tr: 'Atap', reading: 'Saqfun' },
    { ar: 'جِدَارٌ', tr: 'Dinding', reading: 'Jidaarun' },
    { ar: 'بَلَاطٌ', tr: 'Lantai', reading: 'Balaatun' },
    { ar: 'سُلَّمٌ', tr: 'Tangga', reading: 'Sullamun' },
    { ar: 'فِنَاءٌ', tr: 'Halaman', reading: 'Finaa\'un' },
    { ar: 'سُوْرٌ', tr: 'Pagar', reading: 'Suurun' },
    { ar: 'شُرْفَةٌ', tr: 'Balkon', reading: 'Syurfatun' },
    { ar: 'مَخْزَنٌ', tr: 'Gudang', reading: 'Makhzanun' },
    { ar: 'قَاعَةٌ', tr: 'Aula/Ruang Besar', reading: 'Qaa\'atun' },
    { ar: 'مُصَلَّى', tr: 'Musholla', reading: 'Mushallaa' },

    // Dapur 2 (Kitchen Utensils)
    { ar: 'شَوْكَةٌ', tr: 'Garpu', reading: 'Syaukatun' },
    { ar: 'سِكِّيْنٌ', tr: 'Pisau', reading: 'Sikkiinun' },
    { ar: 'قِدْرٌ', tr: 'Panci', reading: 'Qidrun' },
    { ar: 'مِقْلَاةٌ', tr: 'Wajan', reading: 'Miqlaathun' },
    { ar: 'فُرْنٌ', tr: 'Oven/Kompor', reading: 'Furnun' },
    { ar: 'ثَلَّاجَةٌ', tr: 'Kulkas', reading: 'Tsallaajatun' },
    { ar: 'كُوْبٌ', tr: 'Gelas/Cangkir', reading: 'Kuubun' },
    { ar: 'إِبْرِيْقٌ', tr: 'Teko', reading: 'Ibriiqun' },
    { ar: 'طَبَقٌ', tr: 'Piring Besar', reading: 'Thabaqun' },
    { ar: 'مِنْدِيْلٌ', tr: 'Serbet/Tisu', reading: 'Mindiilun' },

    // Kata Kerja 2 (Daily Activities)
    { ar: 'فَتَحَ', tr: 'Membuka', reading: 'Fataha' },
    { ar: 'أَغْلَقَ', tr: 'Menutup', reading: 'Aghlaqa' },
    { ar: 'دَخَلَ', tr: 'Masuk', reading: 'Dakhala' },
    { ar: 'خَرَجَ', tr: 'Keluar', reading: 'Kharaja' },
    { ar: 'صَعِدَ', tr: 'Naik', reading: 'Sha\'ida' },
    { ar: 'نَزَلَ', tr: 'Turun', reading: 'Nazala' },
    { ar: 'رَكِبَ', tr: 'Mengendarai', reading: 'Rakiba' },
    { ar: 'لَعِبَ', tr: 'Bermain', reading: 'La\'iba' },
    { ar: 'ضَحِكَ', tr: 'Tertawa', reading: 'Dhahika' },
    { ar: 'بَكَى', tr: 'Menangis', reading: 'Bakaa' },
    { ar: 'سَمِعَ', tr: 'Mendengar', reading: 'Sami\'a' },
    { ar: 'نَظَرَ', tr: 'Melihat', reading: 'Nazhara' },
    { ar: 'تَكَلَّمَ', tr: 'Berbicara', reading: 'Takallama' },
    { ar: 'سَأَلَ', tr: 'Bertanya', reading: 'Sa\'ala' },
    { ar: 'أَجَابَ', tr: 'Menjawab', reading: 'Ajaaba' },
    { ar: 'عَمِلَ', tr: 'Bekerja', reading: '\'Amila' },
    { ar: 'دَرَسَ', tr: 'Belajar', reading: 'Darasa' },
    { ar: 'عَلَّمَ', tr: 'Mengajar', reading: '\'Allama' },
    { ar: 'سَافَرَ', tr: 'Bepergian', reading: 'Saafara' },
    { ar: 'زَارَ', tr: 'Mengunjungi', reading: 'Zaara' },

    // Alam & Bencana (Nature & Phenomena)
    { ar: 'جَبَلٌ', tr: 'Gunung', reading: 'Jabalun' },
    { ar: 'بَحْرٌ', tr: 'Laut', reading: 'Bahrun' },
    { ar: 'نَهْرٌ', tr: 'Sungai', reading: 'Nahrun' },
    { ar: 'بُحَيْرَةٌ', tr: 'Danau', reading: 'Buhairatun' },
    { ar: 'غَابَةٌ', tr: 'Hutan', reading: 'Ghaabatun' },
    { ar: 'صَحْرَاءٌ', tr: 'Gurun', reading: 'Shahraa\'u' },
    { ar: 'جَزِيْرَةٌ', tr: 'Pulau', reading: 'Jaziiratun' },
    { ar: 'شَاطِئٌ', tr: 'Pantai', reading: 'Syaathi\'un' },
    { ar: 'عَاصِفَةٌ', tr: 'Badai', reading: '\'Aashifatun' },
    { ar: 'زِلْزَالٌ', tr: 'Gempa', reading: 'Zilzaalun' },
    { ar: 'بُرْكَانٌ', tr: 'Gunung Berapi', reading: 'Burkaanun' },
    { ar: 'فَيَضَانٌ', tr: 'Banjir', reading: 'Fayadhaanun' },

    // Profesi 2 (More Professions)
    { ar: 'جُنْدِيٌّ', tr: 'Tentara', reading: 'Jundiyyun' },
    { ar: 'طَيَّارٌ', tr: 'Pilot', reading: 'Thayyaarun' },
    { ar: 'بَحَّارٌ', tr: 'Pelaut', reading: 'Bahhaarun' },
    { ar: 'سَائِقٌ', tr: 'Sopir', reading: 'Saa\'iqun' },
    { ar: 'حَلَّاقٌ', tr: 'Tukang Cukur', reading: 'Hallaaqun' },
    { ar: 'نَجَّارٌ', tr: 'Tukang Kayu', reading: 'Najjaarun' },
    { ar: 'حَدَّادٌ', tr: 'Pandai Besi', reading: 'Haddaadun' },
    { ar: 'خَيَّاطٌ', tr: 'Penjahit', reading: 'Khayyaathun' },
    { ar: 'طَبَّاخٌ', tr: 'Koki', reading: 'Thabbaakhun' },
    { ar: 'مُمَرِّضَةٌ', tr: 'Perawat', reading: 'Mumarridhatun' },

    // Dapur (Kitchen)
    { ar: 'سِكِّيْنٌ', tr: 'Pisau', reading: 'Sikkiinun' },
    { ar: 'شَوْكَةٌ', tr: 'Garpu', reading: 'Syaukatun' },
    { ar: 'مِقْلَاةٌ', tr: 'Wajan', reading: 'Miqlaaun' },
    { ar: 'قِدْرٌ', tr: 'Panci', reading: 'Qidrun' },
    { ar: 'مَوْقِدٌ', tr: 'Kompor', reading: 'Mauqidun' },
    { ar: 'ثَلَّاجَةٌ', tr: 'Kulkas', reading: 'Tsallaajatun' },

    // Aktivitas (Activities)
    { ar: 'يَجْرِي', tr: 'Berlari', reading: 'Yajrii' },
    { ar: 'يَلْعَبُ', tr: 'Bermain', reading: 'Yal\'abu' },
    { ar: 'يَضْحَكُ', tr: 'Tertawa', reading: 'Yadhaku' },
    { ar: 'يَبْكِي', tr: 'Menangis', reading: 'Yabkii' },
    { ar: 'يَطْبُخُ', tr: 'Memasak', reading: 'Yathbukhu' },
    { ar: 'يسْبَحُ', tr: 'Berenang', reading: 'Yasbahu' },

    // Angka (Numbers 11-20)
    { ar: 'أَحَدَ عَشَرَ', tr: 'Sebelas', reading: 'Ahada \'Asyara' },
    { ar: 'اِثْنَا عَشَرَ', tr: 'Dua Belas', reading: 'Itsnaa \'Asyara' },
    { ar: 'ثَلَاثَةَ عَشَرَ', tr: 'Tiga Belas', reading: 'Tsalaatsata \'Asyara' },
    { ar: 'أَرْبَعَةَ عَشَرَ', tr: 'Empat Belas', reading: 'Arba\'ata \'Asyara' },
    { ar: 'خَمْسَةَ عَشَرَ', tr: 'Lima Belas', reading: 'Khamsata \'Asyara' },
    { ar: 'سِتَّةَ عَشَرَ', tr: 'Enam Belas', reading: 'Sittata \'Asyara' },
    { ar: 'سَبْعَةَ عَشَرَ', tr: 'Tujuh Belas', reading: 'Sab\'ata \'Asyara' },
    { ar: 'ثَمَانِيَةَ عَشَرَ', tr: 'Delapan Belas', reading: 'Tsamaaniyata \'Asyara' },
    { ar: 'تِسْعَةَ عَشَرَ', tr: 'Sembilan Belas', reading: 'Tis\'ata \'Asyara' },
    { ar: 'عِشْرُوْنَ', tr: 'Dua Puluh', reading: '\'Isyruuna' },

    // Kata Kerja Tambahan (More Verbs)
    { ar: 'دَخَلَ', tr: 'Masuk', reading: 'Dakhala' },
    { ar: 'خَرَجَ', tr: 'Keluar', reading: 'Kharaja' },
    { ar: 'فَتَحَ', tr: 'Membuka', reading: 'Fataha' },
    { ar: 'أَغْلَقَ', tr: 'Menutup', reading: 'Aghlaqa' },
    { ar: 'نَظَرَ', tr: 'Melihat', reading: 'Nazhara' },
    { ar: 'سَمِعَ', tr: 'Mendengar', reading: 'Sami\'a' },
    { ar: 'تَكَلَّمَ', tr: 'Berbicara', reading: 'Takallama' },
    { ar: 'مَشَى', tr: 'Berjalan', reading: 'Masyaa' },

    // Sayuran (Vegetables)
    { ar: 'طَمَاطِمٌ', tr: 'Tomat', reading: 'Thomaathimun' },
    { ar: 'جَزَرٌ', tr: 'Wortel', reading: 'Jazarun' },
    { ar: 'خِيَارٌ', tr: 'Mentimun', reading: 'khiyaarun' },
    { ar: 'بَصَلٌ', tr: 'Bawang Merah', reading: 'Bashalun' },
    { ar: 'ثَوْمٌ', tr: 'Bawang Putih', reading: 'Tsaumun' },
    { ar: 'بَطَاطِسُ', tr: 'Kentang', reading: 'Bathaathis' },
    { ar: 'بَاذِنْجَانٌ', tr: 'Terong', reading: 'Baadzinjaan' },
    { ar: 'فُلْفُلٌ', tr: 'Cabai', reading: 'Fulfulun' },
    { ar: 'سَبَانِخٌ', tr: 'Bayam', reading: 'Sabaanikh' },
    { ar: 'مَلْفُوْفٌ', tr: 'Kubis/Kol', reading: 'Malfuufun' },
    { ar: 'ذُرَةٌ', tr: 'Jagung', reading: 'Dzurrotun' },
    { ar: 'يَقْطِيْنٌ', tr: 'Labu', reading: 'Yaqthiinun' },
    { ar: 'فُوْلٌ', tr: 'Kacang', reading: 'Fuulun' },
    { ar: 'زَنْجَبِيْلٌ', tr: 'Jahe', reading: 'Zanjabiilun' },
    { ar: 'فِطْرٌ', tr: 'Jamur', reading: 'Fithrun' },
    { ar: 'قَرْنَبيْطٌ', tr: 'Brokoli', reading: 'Qarnabiitun' },
    { ar: 'خَسٌّ', tr: 'Selada', reading: 'Khassun' },
    { ar: 'كَرَفْسٌ', tr: 'Seledri', reading: 'Karafsun' },
    { ar: 'فِجْلٌ', tr: 'Lobak', reading: 'Fijlun' },
    { ar: 'فَاصُوْلِيَّا', tr: 'Buncis', reading: 'Faashuuliyyaa' },

    // Keseharian & Benda (Daily Life & Items)
    { ar: 'مِكْنَسَةٌ', tr: 'Sapu', reading: 'Miknasatun' },
    { ar: 'مِمْسَحَةٌ', tr: 'Pel', reading: 'Mimsahatun' },
    { ar: 'دَلْوٌ', tr: 'Ember', reading: 'Dalwun' },
    { ar: 'زُبَالَةٌ', tr: 'Sampah', reading: 'Zubaalatun' },
    { ar: 'صَابُوْنٌ', tr: 'Sabun', reading: 'Shaabuunun' },
    { ar: 'فُرْشَاةُ الْأَسْنَانِ', tr: 'Sikat Gigi', reading: 'Fursyaatul Asnaan' },
    { ar: 'مَعْجُوْنُ الْأَسْنَانِ', tr: 'Odol', reading: 'Ma\'juunul Asnaan' },
    { ar: 'مِنْشَفَةٌ', tr: 'Handuk', reading: 'Minsyafatun' },
    { ar: 'مُشْطٌ', tr: 'Sisir', reading: 'Musythun' },
    { ar: 'مِفْتَاحٌ', tr: 'Kunci', reading: 'Miftaahun' },
    { ar: 'كِيْسٌ', tr: 'Kantong', reading: 'Kiisun' },
    { ar: 'نُقُوْدٌ', tr: 'Uang', reading: 'Nuquudun' },
    { ar: 'مِحْفَظَةٌ', tr: 'Dompet', reading: 'Mihfazhatun' },
    { ar: 'سَاعَةُ الْيَدِ', tr: 'Jam Tangan', reading: 'Saa\'atul Yad' },
    { ar: 'نَعْلٌ', tr: 'Sandal', reading: 'Na\'lun' },
    { ar: 'فُطُوْرٌ', tr: 'Sarapan', reading: 'Futhuurun' },
    { ar: 'غَدَاءٌ', tr: 'Makan Siang', reading: 'Ghadaaun' },
    { ar: 'عَشَاءٌ', tr: 'Makan Malam', reading: '\'Asyaaun' },
    { ar: 'اِسْتِحْمَامٌ', tr: 'Mandi', reading: 'Istihmaamun' },
    { ar: 'نَوْمٌ', tr: 'Tidur', reading: 'Naumun' },
    { ar: 'اِسْتَيْقَظَ', tr: 'Bangun', reading: 'Istaiqazha' },
    { ar: 'صَلَّى', tr: 'Sholat', reading: 'Shollaa' },
    { ar: 'تَوَضَّأَ', tr: 'Wudhu', reading: 'Tawadhdha-a' },
    { ar: 'دَعَا', tr: 'Berdoa', reading: 'Da\'aa' },
    { ar: 'عَمِلَ', tr: 'Bekerja', reading: '\'Amila' },
    { ar: 'تَعَلَّمَ', tr: 'Belajar', reading: 'Ta\'allama' },
    { ar: 'سَاعَدَ', tr: 'Membantu', reading: 'Saa\'ada' },
    { ar: 'أَعَدَّ', tr: 'Menyiapkan', reading: 'A\'adda' },
    { ar: 'اِشْتَرَى', tr: 'Membeli', reading: 'Isytaraa' },
    { ar: 'بَاعَ', tr: 'Menjual', reading: 'Baa\'a' }
];

const conversationData = [
    {
        title: "Perkenalan (At-Ta'aruf)",
        lines: [
            { speaker: "Ahmad", ar: "السَّلَامُ عَلَيْكُمْ", tr: "Assalamualaikum" },
            { speaker: "Zaid", ar: "وَعَلَيْكُمُ السَّلَامُ", tr: "Waalaikumussalam" },
            { speaker: "Ahmad", ar: "كَيْفَ حَالُكَ؟", tr: "Bagaimana kabarmu?" },
            { speaker: "Zaid", ar: "بِخَيْرٍ وَالْحَمْدُ لِلَّهِ", tr: "Baik, Alhamdulillah" },
            { speaker: "Ahmad", ar: "مَا اسْمُكَ؟", tr: "Siapa namamu?" },
            { speaker: "Zaid", ar: "اِسْمِي زَيْدٌ", tr: "Namaku Zaid" }
        ]
    },
    {
        title: "Di Sekolah (Fil Madrasati)",
        lines: [
            { speaker: "Guru", ar: "صَبَاحُ الْخَيْرِ يَا تَلَامِيْذُ", tr: "Selamat pagi wahai murid-murid" },
            { speaker: "Murid", ar: "صَبَاحُ النُّوْرِ يَا أُسْتَاذُ", tr: "Selamat pagi wahai guru" },
            { speaker: "Guru", ar: "اِفْتَحُوْا الْكِتَابَ", tr: "Bukalah buku" },
            { speaker: "Murid", ar: "نَعَمْ يَا أُسْتَاذُ", tr: "Baik wahai guru" },
            { speaker: "Guru", ar: "هَذَا قَلَمٌ وَ هَذِهِ مِسْطَرَةٌ", tr: "Ini pena dan ini penggaris" }
        ]
    },
    {
        title: "Di Rumah (Fil Baiti)",
        lines: [
            { speaker: "Ibu", ar: "أَيْنَ أَبُوْكَ؟", tr: "Dimana ayahmu?" },
            { speaker: "Anak", ar: "أَبِيْ فِي الْغُرْفَةِ", tr: "Ayahku di dalam kamar" },
            { speaker: "Ibu", ar: "مَاذَا يَعْمَلُ؟", tr: "Apa yang dia kerjakan?" },
            { speaker: "Anak", ar: "هُوَ يَقْرَأُ الْقُرْآنَ", tr: "Dia sedang membaca Al-Qur'an" },
            { speaker: "Ibu", ar: "تَعَالْ نَأْكُلُ فِي الْمَطْبَخِ", tr: "Kemarilah kita makan di dapur" }
        ]
    },
    {
        title: "Profesi (Al-Mihan)",
        lines: [
            { speaker: "Ali", ar: "مَا مِهْنَةُ أَبِيْكَ؟", tr: "Apa pekerjaan ayahmu?" },
            { speaker: "Budi", ar: "أَبِيْ طَبِيْبٌ", tr: "Ayahku seorang dokter" },
            { speaker: "Ali", ar: "وَ مَنْ هَذَا؟", tr: "Dan siapa ini?" },
            { speaker: "Budi", ar: "هَذَا جَدِّيْ، هُوَ فَلَّاحٌ", tr: "Ini kakekku, dia seorang petani" },
            { speaker: "Ali", ar: "مَاشَاءَ الله", tr: "Masya Allah" }
        ]
    },
    {
        title: "Di Pasar Sayur (Fis Suuq)",
        lines: [
            { speaker: "Penjual", ar: "أَهْلًا وَسَهْلًا، مَاذَا تُرِيْدُ؟", tr: "Selamat datang, apa yang kau inginkan?" },
            { speaker: "Pembeli", ar: "أُرِيْدُ طَمَاطِمَ وَ بَصَلًا", tr: "Saya ingin tomat dan bawang." },
            { speaker: "Penjual", ar: "هَلْ تُرِيْدُ شَيْئًا آخَرَ؟", tr: "Apakah kau ingin sesuatu yang lain?" },
            { speaker: "Pembeli", ar: "نَعَمْ، أُرِيْدُ خِيَارًا وَ بَطَاطِسَ", tr: "Ya, saya ingin timun dan kentang." },
            { speaker: "Penjual", ar: "تَفَضَّلْ هَذِهِ هِيَ", tr: "Silakan, ini dia." }
        ]
    },
    {
        title: "Memasak di Dapur (Fil Mathbakh)",
        lines: [
            { speaker: "Anak", ar: "مَاذَا تَطْبُخِيْنَ يَا أُمِّيْ؟", tr: "Apa yang sedang ibu masak?" },
            { speaker: "Ibu", ar: "أَطْبُخُ الرُّزَّ وَ الدَّجَاجَ", tr: "Ibu sedang memasak nasi dan ayam." },
            { speaker: "Anak", ar: "هَلْ أُسَاعِدُكِ؟", tr: "Bolehkah aku membantumu?" },
            { speaker: "Ibu", ar: "نَعَمْ، اغْسِلِ الْخَضْرَوَاتِ", tr: "Ya, cucilah sayuran itu." },
            { speaker: "Anak", ar: "حَسَنًا يَا أُمِّيْ", tr: "Baik bu." }
        ]
    },
    {
        title: "Bangun Pagi (Istiqazh minan Naum)",
        lines: [
            { speaker: "Ahmad", ar: "مَتَى تَسْتَيْقِظُ؟", tr: "Kapan kamu bangun?" },
            { speaker: "Ali", ar: "أَسْتَيْقِظُ عِنْدَ الْفَجْرِ", tr: "Saya bangun saat fajar." },
            { speaker: "Ahmad", ar: "مَاذَا تَفْعَلُ بَعْدَهَا؟", tr: "Apa yang kamu lakukan setelahnya?" },
            { speaker: "Ali", ar: "أَتَوَضَّأُ وَ أُصَلِّي الصُّبْحَ", tr: "Saya berwudhu dan sholat Subuh." },
            { speaker: "Ahmad", ar: "بَارَكَ اللهُ فِيْكَ", tr: "Semoga Allah memberkahimu." }
        ]
    },
    {
        title: "Pergi Kerja (Adz-dzahab ilal 'Amal)",
        lines: [
            { speaker: "Istri", ar: "إِلَى أَيْنَ تَذْهَبُ؟", tr: "Hendak kemana kamu pergi?" },
            { speaker: "Suami", ar: "أَذْهَبُ إِلَى الْمَكْتَبِ", tr: "Saya pergi ke kantor." },
            { speaker: "Istri", ar: "كَيْفَ تَذْهَبُ؟", tr: "Bagaimana kamu pergi?" },
            { speaker: "Suami", ar: "أَذْهَبُ بِالسَّيَّارَةِ", tr: "Saya pergi dengan mobil." },
            { speaker: "Istri", ar: "فِي أَمَانِ الله", tr: "Semoga dalam lindungan Allah." }
        ]
    },
    {
        title: "Di Taman Kota (Fil Hadiiqah)",
        lines: [
            { speaker: "Hasan", ar: "الْجَوُّ جَمِيْلٌ الْيَوْمَ", tr: "Cuaca hari ini indah." },
            { speaker: "Husain", ar: "نَعَمْ، هَذِهِ حَدِيْقَةٌ وَاسِعَةٌ", tr: "Ya, taman ini luas." },
            { speaker: "Hasan", ar: "اُنْظُرْ، تِلْكَ أَزْهَارٌ جَمِيْلَةٌ", tr: "Lihat, itu bunga-bunga yang indah." },
            { speaker: "Husain", ar: "هَيَّا نَجْلِسُ هُنَاكَ", tr: "Ayo kita duduk di sana." }
        ]
    },
    {
        title: "Menanyakan Jam (Kamis Saa'ah)",
        lines: [
            { speaker: "Orang 1", ar: "عَفْوًا، كَمِ السَّاعَةُ الْآنَ؟", tr: "Maaf, jam berapa sekarang?" },
            { speaker: "Orang 2", ar: "السَّاعَةُ الْآنَ الْخَامِسَةُ", tr: "Sekarang jam lima." },
            { speaker: "Orang 1", ar: "صَبَاحًا أَمْ مَسَاءً؟", tr: "Pagi atau sore?" },
            { speaker: "Orang 2", ar: "الْخَامِسَةُ مَسَاءً", tr: "Jam lima sore." },
            { speaker: "Orang 1", ar: "شُكْرًا جَزِيْلًا", tr: "Terima kasih banyak." }
        ]
    },
    {
        title: "Di Toko Buku (Fil Maktabah)",
        lines: [
            { speaker: "Penjual", ar: "أَيَّ خِدْمَةٍ؟", tr: "Ada yang bisa dibantu?" },
            { speaker: "Pembeli", ar: "أُرِيْدُ كِتَابَ اللُّغَةِ الْعَرَبِيَّةِ", tr: "Saya ingin buku Bahasa Arab." },
            { speaker: "Penjual", ar: "هَذَا هُوَ الْكِتَابُ", tr: "Ini bukunya." },
            { speaker: "Pembeli", ar: "كَمِ الثَّمَنُ؟", tr: "Berapa harganya?" },
            { speaker: "Penjual", ar: "عِشْرُوْنَ رِيَالًا", tr: "Dua puluh Riyal." }
        ]
    },
    {
        title: "Menelepon (Al Haatif)",
        lines: [
            { speaker: "Ahmad", ar: "آلُوْ، السَّلَامُ عَلَيْكُمْ", tr: "Halo, Assalamualaikum." },
            { speaker: "Khalid", ar: "وَعَلَيْكُمُ السَّلَامُ، مَنْ يَتَكَلَّمُ؟", tr: "Waalaikumsalam, siapa yang bicara?" },
            { speaker: "Ahmad", ar: "أَنَا أَحْمَدُ، هَلْ خَالِدٌ مَوْجُوْدٌ؟", tr: "Saya Ahmad, apakah Khalid ada?" },
            { speaker: "Khalid", ar: "نَعَمْ، أَنَا خَالِدٌ", tr: "Ya, saya Khalid." }
        ]
    },
    {
        title: "Liburan (Al 'Uthlah)",
        lines: [
            { speaker: "Siswa 1", ar: "أَيْنَ تَذْهَبُ فِي الْعُطْلَةِ؟", tr: "Kemana kamu pergi saat liburan?" },
            { speaker: "Siswa 2", ar: "أَذْهَبُ إِلَى الْقَرْيَةِ", tr: "Saya pergi ke desa." },
            { speaker: "Siswa 1", ar: "مَاذَا تُشَاهِدُ هُنَاكَ؟", tr: "Apa yang kamu lihat di sana?" },
            { speaker: "Siswa 2", ar: "أُشَاهِدُ الْمَزَارِعَ وَ الْأَنْهَارَ", tr: "Saya melihat sawah dan sungai." }
        ]
    },
    {
        title: "Tentang Pakaian (Anil Malaabis)",
        lines: [
            { speaker: "Ibu", ar: "اِغْسِلْ هَذَا الْقَمِيْصَ", tr: "Cucilah kemeja ini." },
            { speaker: "Anak", ar: "لِمَاذَا؟", tr: "Kenapa?" },
            { speaker: "Ibu", ar: "لِأَنَّهُ وَسِخٌ", tr: "Karena kemeja itu kotor." },
            { speaker: "Anak", ar: "حَسَنًا، سَأَغْسِلُهُ بِالصَّابُوْنِ", tr: "Baik, saya akan mencucinya dengan sabun." }
        ]
    }
];

// Story Data


function renderStory() {
    const container = document.getElementById('story-container');
    if (!container) return;

    // Ensure data exists
    if (!storyData[currentStoryIndex]) {
        currentStoryIndex = 0;
        currentSlideIndex = 0;
    }

    const story = storyData[currentStoryIndex];
    if (!story.slides[currentSlideIndex]) currentSlideIndex = 0;
    const slide = story.slides[currentSlideIndex];

    container.innerHTML = `
        <div style="flex:1; background:#f1f5f9; display:flex; align-items:center; justify-content:center; position:relative; min-height:300px;">
             <img src="${slide.img}" alt="Slide Img" style="max-width:100%; max-height:400px; width:100%; object-fit:contain;">
             <button onclick="changeSlide(-1)" style="position:absolute; left:1rem; top:50%; transform:translateY(-50%); background:rgba(0,0,0,0.5); color:white; border:none; padding:1rem; border-radius:50%; cursor:pointer; font-size:1.5rem; width:50px; height:50px; display:flex; align-items:center; justify-content:center;">❮</button>
             <button onclick="changeSlide(1)" style="position:absolute; right:1rem; top:50%; transform:translateY(-50%); background:rgba(0,0,0,0.5); color:white; border:none; padding:1rem; border-radius:50%; cursor:pointer; font-size:1.5rem; width:50px; height:50px; display:flex; align-items:center; justify-content:center;">❯</button>
             <div style="position:absolute; bottom:1rem; right:1rem; background:rgba(0,0,0,0.6); color:white; padding:0.2rem 0.5rem; border-radius:0.5rem; font-size:0.8rem;">
                ${currentStoryIndex + 1} / ${storyData.length} Cerita
             </div>
        </div>
        <div style="padding:2rem; text-align:center;">
            <h3 style="color:var(--text-secondary); margin-bottom:1rem; font-size:1rem;">${story.title} (${currentSlideIndex + 1}/${story.slides.length})</h3>
            <div class="arabic-question" style="font-size:2rem; margin-bottom:1rem; cursor:pointer;" onclick="speak('${slide.ar.replace(/'/g, "\\'")}', 'story-text-container')">
                ${slide.ar} <span style="font-size:1rem">🔊</span>
            </div>
            <div style="font-size:1.2rem; color:var(--text-secondary);">${slide.tr}</div>
        </div>
    `;
}

function changeSlide(direction) {
    const story = storyData[currentStoryIndex];
    let newIndex = currentSlideIndex + direction;

    if (newIndex < 0) {
        // Go to previous story if available
        if (currentStoryIndex > 0) {
            currentStoryIndex--;
            currentSlideIndex = storyData[currentStoryIndex].slides.length - 1;
            renderStory();
        } else {
            showToast("Ini adalah awal cerita.");
        }
    } else if (newIndex >= story.slides.length) {
        // Go to next story if available
        if (currentStoryIndex < storyData.length - 1) {
            currentStoryIndex++;
            currentSlideIndex = 0;
            renderStory();
        } else {
            showToast("Ini adalah akhir cerita.");
        }
    } else {
        currentSlideIndex = newIndex;
        renderStory();
    }
}

// State
let currentScore = parseInt(localStorage.getItem('arabicScore') || '0');
let hasVisited = localStorage.getItem('arabicVisited');

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderHijaiyah();
    renderVocab();
    renderConversation();
    renderStory();
    updateProgress();

    // Initialize Navigation Logic
    handleNavigation();
    window.addEventListener('hashchange', handleNavigation);

    // Direct Click Navigation (Prevents reload/jump issues)
    document.querySelectorAll('.nav-btn, .logo').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const href = btn.getAttribute('href');
            const targetId = href ? href.slice(1) : 'home';

            // Push State (Change URL without reload)
            history.pushState(null, null, `#${targetId}`);

            // Manually Trigger Navigation
            handleNavigation();
        });
    });

    // Search Listener
    const searchInput = document.getElementById('vocabSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            renderVocab(term);
            renderConversation(term);
        });
    }

    // Initial greeting if new user
    if (!hasVisited) {
        showToast("Ahlan wa Sahlan! Selamat datang di Ruang Belajar Arab.");
        localStorage.setItem('arabicVisited', 'true');
    }
});

// Navigation
function handleNavigation() {
    const hash = window.location.hash.slice(1) || 'home';
    const sections = document.querySelectorAll('section');
    const navBtns = document.querySelectorAll('.nav-btn');

    sections.forEach(sec => {
        sec.classList.toggle('active', sec.id === hash);
        if (sec.id === hash) sec.classList.add('fade-in');
    });

    navBtns.forEach(btn => {
        const target = btn.getAttribute('href').slice(1);
        btn.classList.toggle('active', target === hash);
    });

    if (hash === 'quiz') startQuiz();

    // Scroll to top immediately to show new section content
    window.scrollTo({ top: 0, behavior: 'auto' });
}

// Theme Handling
function initTheme() {
    const isDark = localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);

    document.getElementById('theme-toggle').addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeIcon(next === 'dark');
    });
}

function updateThemeIcon(isDark) {
    const btn = document.getElementById('theme-toggle');
    btn.innerHTML = isDark ?
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>' :
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

// Audio Engine
// Audio State Management
let isMuted = false;
let currentUtterance = null;
const synth = window.speechSynthesis;

function toggleMute() {
    isMuted = !isMuted;

    // Cancel current if muting
    if (isMuted) {
        if (synth) synth.cancel();
        updateAudioIndicator(false);
    }

    const btn = document.getElementById('mute-toggle');
    if (btn) {
        btn.innerHTML = isMuted ? '🔇 Unmute' : '🔊 Mute';
        btn.style.color = isMuted ? 'var(--text-secondary)' : 'var(--primary)';
        // Optional: Update global UI for mute state if needed
    }
    showToast(isMuted ? "Suara dinonaktifkan" : "Suara diaktifkan");
}

// Helper to get voices (handles async loading in Chrome)
let voices = [];
function loadVoices() {
    voices = synth.getVoices();
}

if (synth) {
    loadVoices();
    if (synth.onvoiceschanged !== undefined) {
        synth.onvoiceschanged = loadVoices;
    }
}

function speak(text, elementId = null) {
    if (!synth) {
        showToast("Maaf, browser Anda tidak mendukung fitur suara.");
        return;
    }

    if (isMuted) return;

    // Stop previous
    synth.cancel();
    updateAudioIndicator(false);

    const utterance = new SpeechSynthesisUtterance(text);

    // Ensure voices are loaded
    if (voices.length === 0) {
        voices = synth.getVoices();
    }

    // Attempt to find an Arabic voice with better prioritization
    const arVoice = voices.find(v => v.lang === 'ar-SA') ||
        voices.find(v => v.lang.includes('ar')) ||
        voices.find(v => v.name.toLowerCase().includes('arab'));

    if (arVoice) {
        utterance.voice = arVoice;
        utterance.lang = arVoice.lang;
        console.log("Using Voice:", arVoice.name, arVoice.lang);
    } else {
        // Fallback
        utterance.lang = 'ar-SA';
        console.warn("No specific Arabic voice found, forcing lang='ar-SA'");
    }

    utterance.volume = 1.0;

    utterance.rate = 0.8;

    utterance.onstart = () => {
        updateAudioIndicator(true);
        if (elementId) {
            const el = document.getElementById(elementId);
            if (el) el.classList.add('playing-audio');
        }
    };

    utterance.onend = () => {
        updateAudioIndicator(false);
        if (elementId) {
            const el = document.getElementById(elementId);
            if (el) el.classList.remove('playing-audio');
        }
    };

    utterance.onerror = (e) => {
        console.error("Speech Error:", e);
        updateAudioIndicator(false);
        // Don't show toast for every cancellation (interrupted)
        if (e.error !== 'interrupted' && e.error !== 'canceled') {
            showToast("Gagal memutar suara.");
        }
    };

    currentUtterance = utterance;
    synth.speak(utterance);

    // Resume if stuck (Chrome bug workaround)
    if (synth.paused) {
        synth.resume();
    }
}

function updateAudioIndicator(isPlaying) {
    const indicator = document.getElementById('audio-status-indicator');
    if (indicator) {
        indicator.style.opacity = isPlaying ? '1' : '0';
        if (isPlaying) {
            indicator.innerHTML = `
                <span class="wave"></span>
                <span class="wave"></span>
                <span class="wave"></span>
             `;
        }
    }
}

// Renders
function renderHijaiyah() {
    const grid = document.getElementById('hijaiyah-grid');
    grid.innerHTML = hijaiyahData.map(d => `
        <div class="hijaiyah-card" onclick="speak('${d.char}')">
            <div class="play-icon">🔊</div>
            <div class="letter">${d.char}</div>
            <div class="transliteration">${d.name}</div>
        </div>
    `).join('');
}

function renderVocab(filter = '') {
    const grid = document.getElementById('vocab-grid');
    const filtered = vocabData.filter(d =>
        d.tr.toLowerCase().includes(filter) ||
        d.reading.toLowerCase().includes(filter) ||
        d.ar.includes(filter)
    );

    if (filtered.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:2rem;color:var(--text-secondary)">Tidak ditemukan kosakata yang cocok.</div>';
        return;
    }

    grid.innerHTML = filtered.map(d => `
        <div class="vocab-card" onclick="speak('${d.ar}')">
            <div class="vocab-arabic">${d.ar}</div>
            <div style="font-weight:600; font-size: 1.1rem;">${d.tr}</div>
            <div style="color:var(--text-secondary); font-size: 0.9rem;">${d.reading}</div>
            <button style="margin-top:1rem; padding:0.5rem 1rem; border:1px solid var(--primary); background:none; border-radius:1rem; color:var(--primary); cursor:pointer">
                🔊 Dengar
            </button>
        </div>
    `).join('');
}

function renderConversation(filter = '') {
    const container = document.getElementById('conversation-list');
    const filtered = conversationData.filter(c =>
        c.title.toLowerCase().includes(filter) ||
        c.lines.some(l =>
            l.tr.toLowerCase().includes(filter) ||
            l.ar.includes(filter) ||
            l.speaker.toLowerCase().includes(filter)
        )
    );

    if (filtered.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--text-secondary)">Tidak ditemukan percakapan yang cocok.</div>';
        return;
    }

    container.innerHTML = filtered.map(c => `
        <div style="background:var(--surface-color); padding:1.5rem; border-radius:1rem; border:1px solid var(--border-color)">
            <h3 style="margin-bottom:1rem; color:var(--primary)">${c.title}</h3>
            <div style="display:flex; flex-direction:column; gap:1rem;">
                ${c.lines.map(line => `
                    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:0.5rem">
                        <div>
                            <div style="font-weight:bold; color:var(--text-secondary)">${line.speaker}</div>
                            <div>${line.tr}</div>
                        </div>
                        <div style="text-align:right">
                            <div style="font-family:'Amiri'; font-size:1.5rem; margin-bottom:0.25rem">${line.ar}</div>
                            <button onclick="speak('${line.ar}')" style="font-size:0.8rem; background:none; border:none; cursor:pointer; color:var(--primary)">🔊 Play</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Quiz Logic
// Quiz Logic
let currentQuizType = null;
let quizSession = {
    total: 10,
    current: 0,
    score: 0,
    timeAttack: false
};
let quizTimerInterval;
let isTimeAttackMode = false;

function startQuiz() {
    initQuizMenu();
}

function toggleTimeAttack() {
    isTimeAttackMode = !isTimeAttackMode;
    initQuizMenu(); // Re-render menu to update button
}

// Sound Effects System using Web Audio API
// Scramble Game Data


const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// Resume AudioContext and SpeechSynthesis on first user interaction
function unlockAudio() {
    // 1. Unlock Web Audio API
    if (audioCtx.state === 'suspended') {
        audioCtx.resume().then(() => {
            console.log("AudioContext unlocked");
        });
    }

    // 2. Unlock Speech Synthesis (Critical for mobile)
    if (synth) {
        if (synth.paused) synth.resume();
        // Play a silent short utterance to 'warm up' the engine
        const silent = new SpeechSynthesisUtterance(" ");
        silent.volume = 0; // Silent
        silent.rate = 2;   // Fast
        synth.speak(silent);
    }

    // Remove listener once unlocked
    document.removeEventListener('click', unlockAudio);
    document.removeEventListener('touchstart', unlockAudio);
}

document.addEventListener('click', unlockAudio);
document.addEventListener('touchstart', unlockAudio);

const SoundFx = {
    playTone: (freq, type, duration) => {
        if (isMuted) return; // Respect global mute
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    },
    click: () => {
        SoundFx.playTone(600, 'sine', 0.1);
    },
    correct: () => {
        if (isMuted) return;
        const now = audioCtx.currentTime;
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => { // C Major chord
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.frequency.value = freq;
            osc.type = 'sine';
            gain.gain.setValueAtTime(0.1, now + i * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 0.3);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now + i * 0.1);
            osc.stop(now + i * 0.1 + 0.3);
        });
    },
    wrong: () => {
        if (isMuted) return;
        const now = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(100, now + 0.3);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.3);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.3);
    },
    welcome: () => {
        if (isMuted) return;
        const now = audioCtx.currentTime;
        // Ascending chime
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.05, now + i * 0.15);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.15 + 0.8);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now + i * 0.15);
            osc.stop(now + i * 0.15 + 0.8);
        });
    }
};

// Global Button Click Sound
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.classList.contains('nav-btn') || e.target.classList.contains('cta-btn')) {
        SoundFx.click();
    }
});

function initQuizMenu() {
    const container = document.getElementById('quiz-interface');
    const timeBtnStyle = isTimeAttackMode
        ? 'background:var(--accent); color:white; border-color:var(--accent)'
        : 'background:transparent; color:var(--text-secondary); border-color:var(--border-color)';
    const timeBtnText = isTimeAttackMode ? '⚡ Time Attack: ON' : '⚡ Time Attack: OFF';

    container.innerHTML = `
        <h3 style="margin-bottom:1.5rem; font-size:1.5rem">Pilih Jenis Kuis</h3>
        
        <div style="margin-bottom:2rem; text-align:center;">
             <button onclick="toggleTimeAttack()" style="
                padding: 0.5rem 1.5rem; 
                border: 2px solid; 
                border-radius: 2rem; 
                cursor: pointer; 
                font-weight:600; 
                transition:all 0.3s;
                ${timeBtnStyle}
             ">
                ${timeBtnText}
             </button>
             <div style="font-size:0.8rem; color:var(--text-secondary); margin-top:0.5rem;">Jawab dalam 10 detik!</div>
        </div>

        <div class="grid-container" style="max-width:800px; margin:0 auto; display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:1rem;">
            <div class="hijaiyah-card" onclick="startLevel('hijaiyah')" style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1rem;">
                <div style="font-size:3rem">أ</div>
                <div style="font-weight:bold">Kuis Hijaiyah</div>
                <div style="font-size:0.9rem; color:var(--text-secondary)">Tebak Nama Huruf</div>
            </div>
            <div class="hijaiyah-card" onclick="startLevel('vocab')" style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1rem;">
                <div style="font-size:3rem">📖</div>
                <div style="font-weight:bold">Kuis Kosakata</div>
                <div style="font-size:0.9rem; color:var(--text-secondary)">Tebak Arti Kata</div>
            </div>
             <div class="hijaiyah-card" onclick="startLevel('conversation')" style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1rem;">
                <div style="font-size:3rem">💬</div>
                <div style="font-weight:bold">Kuis Percakapan</div>
                <div style="font-size:0.9rem; color:var(--text-secondary)">Pahami Kalimat</div>
            </div>

        </div>
    `;
}

function startLevel(type) {
    currentQuizType = type;
    quizSession = {
        total: 10,
        current: 0,
        score: 0,
        timeAttack: isTimeAttackMode,
        usedIndices: []
    };
    nextQuestion();
}

function nextQuestion() {
    const container = document.getElementById('quiz-interface');

    // Check if session ended
    if (quizSession.current >= quizSession.total) {
        showQuizResult(container);
        return;
    }

    let q, options, correctAns, questionHTML, mode, pool;

    // Select Pool and Random Question with No Repeats
    if (currentQuizType === 'hijaiyah') {
        pool = hijaiyahData.filter(h => h.char && h.name);
    } else if (currentQuizType === 'vocab') {
        pool = vocabData.filter(v => v.tr && v.ar);
    } else if (currentQuizType === 'conversation') {
        pool = conversationData.flatMap(c => c.lines);
    }

    // Find unused index
    let idx;
    let attempts = 0;
    do {
        idx = Math.floor(Math.random() * pool.length);
        attempts++;
    } while (quizSession.usedIndices.includes(idx) && attempts < 100);

    quizSession.usedIndices.push(idx);
    q = pool[idx];

    // Logic to select random question based on type
    if (currentQuizType === 'hijaiyah') {
        mode = Math.random() > 0.5 ? 0 : 1;

        if (mode === 0) {
            correctAns = q.name;
            const distractors = pool.filter(x => x.name !== correctAns).sort(() => 0.5 - Math.random()).slice(0, 3).map(x => x.name);
            options = [correctAns, ...distractors].sort(() => 0.5 - Math.random());
            questionHTML = `<div class="letter" style="font-size:6rem; margin:1rem 0; cursor:pointer;" onclick="speak('${q.char}')">${q.char} <span style="font-size:1.5rem">🔊</span></div>`;
        } else {
            correctAns = q.char;
            const distractors = pool.filter(x => x.char !== correctAns).sort(() => 0.5 - Math.random()).slice(0, 3).map(x => x.char);
            options = [correctAns, ...distractors].sort(() => 0.5 - Math.random());
            questionHTML = `<div style="font-size:2rem; margin:1rem 0;">Huruf <b>${q.name}</b> adalah...</div>`;
        }

    } else if (currentQuizType === 'vocab') {
        mode = Math.random() > 0.5 ? 0 : 1;

        if (mode === 0) {
            correctAns = q.tr;
            // Use pool for distractors logic consistency (though practically same)
            const distractors = pool.filter(x => x.tr !== correctAns).sort(() => 0.5 - Math.random()).slice(0, 3).map(x => x.tr);
            options = [correctAns, ...distractors].sort(() => 0.5 - Math.random());
            questionHTML = `<div class="arabic-question" style="cursor:pointer;" onclick="speak('${q.ar}')">${q.ar} <span style="font-size:1rem">🔊</span></div><div style="color:var(--text-secondary);margin-bottom:1rem">Apa artinya?</div>`;
        } else {
            correctAns = q.ar;
            const distractors = pool.filter(x => x.ar !== correctAns).sort(() => 0.5 - Math.random()).slice(0, 3).map(x => x.ar);
            options = [correctAns, ...distractors].sort(() => 0.5 - Math.random());
            questionHTML = `<div style="font-size:1.5rem; margin:1rem 0; font-weight:bold;">${q.tr}</div><div style="color:var(--text-secondary);margin-bottom:1rem">Apa bahasa Arabnya?</div>`;
        }

    } else if (currentQuizType === 'conversation') {
        correctAns = q.tr;
        const distractors = pool.filter(x => x.tr !== correctAns).sort(() => 0.5 - Math.random()).slice(0, 3).map(x => x.tr);
        options = [correctAns, ...distractors].sort(() => 0.5 - Math.random());
        questionHTML = `
            <div style="margin-bottom:1rem; color:var(--text-secondary)">Apa arti kalimat ini?</div>
            <div class="arabic-question" style="font-size:2rem; line-height:1.5; cursor:pointer;" onclick="speak('${q.ar}')">${q.ar} <span style="font-size:1rem">🔊</span></div>
        `;
    }

    window.currentQuizAnswer = correctAns; // Store for timeout logic

    let timerHTML = '';
    if (quizSession.timeAttack) {
        timerHTML = `<div class="timer-container"><div id="quiz-timer" class="timer-bar" style="width:100%"></div></div>`;
    }

    container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
            <button onclick="initQuizMenu()" class="nav-btn">⬅ Batal</button>
            <div style="font-weight:bold; color:var(--primary); text-transform:capitalize;">
                ${currentQuizType} (${quizSession.current + 1}/${quizSession.total})
                ${quizSession.timeAttack ? '⚡' : ''}
            </div>
        </div>
        ${timerHTML}
        ${questionHTML}
        <div class="options-grid">
            ${options.map(opt => `
                <button class="option-btn" onclick="checkAnswer(this, '${opt.replace(/'/g, "\\'")}', '${correctAns.replace(/'/g, "\\'")}')" style="font-family:${(mode === 1 || (currentQuizType === 'hijaiyah' && mode === 1)) ? "'Amiri', serif; font-size:1.5rem;" : "inherit"}">
                    ${opt}
                </button>
            `).join('')}
        </div>
    `;

    if (quizSession.timeAttack) startTimer();
}

function startTimer() {
    if (quizTimerInterval) clearInterval(quizTimerInterval);

    // 10 Seconds
    let timeLeft = 100;
    const bar = document.getElementById('quiz-timer');

    quizTimerInterval = setInterval(() => {
        timeLeft -= 1;
        if (bar) bar.style.width = `${timeLeft}%`;

        if (timeLeft <= 0) {
            clearInterval(quizTimerInterval);
            checkAnswer(null, null, window.currentQuizAnswer);
        }
    }, 100);
}

function showQuizResult(container) {
    const percentage = (quizSession.score / quizSession.total) * 100;
    let message = "";
    let emoji = "";

    if (percentage === 100) {
        message = "Masya Allah! Luar Biasa! Kamu menjawab semua dengan benar!";
        emoji = "🏆";
        speak('ممتاز جدا');
    } else if (percentage >= 80) {
        message = "Hebat! Pertahankan prestasimu!";
        emoji = "🌟";
        speak('أحسنت');
    } else if (percentage >= 50) {
        message = "Bagus! Teruslah berlatih agar semakin lancar.";
        emoji = "👍";
        speak('جيد');
    } else {
        message = "Jangan menyerah! Kegagalan adalah awal dari keberhasilan. Ayo coba lagi!";
        emoji = "💪";
        speak('لا تيأس');
    }

    container.innerHTML = `
        <div style="text-align:center; padding:2rem 0;">
            <div style="font-size:4rem; margin-bottom:1rem;">${emoji}</div>
            <h2 style="font-size:2rem; margin-bottom:0.5rem; color:var(--primary)">Skor Kamu: ${quizSession.score * 10}</h2>
            <p style="font-size:1.2rem; color:var(--text-secondary); margin-bottom:2rem;">${message}</p>
            <button onclick="initQuizMenu()" class="cta-btn">Kembali ke Menu</button>
            <button onclick="startLevel('${currentQuizType}')" class="nav-btn" style="margin-top:1rem; border:1px solid var(--border-color)">Coba Lagi</button>
        </div>
    `;
}

function checkAnswer(btn, selected, correct) {
    if (quizTimerInterval) clearInterval(quizTimerInterval);
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);

    quizSession.current++;

    if (selected === correct) {
        if (btn) btn.classList.add('correct');
        quizSession.score++;
        updateScore(10);
        showToast("Benar!");
        speak('صحيح');
        SoundFx.correct();
    } else {
        if (btn) btn.classList.add('wrong');
        allBtns.forEach(b => {
            if (b.innerText === correct) b.classList.add('correct');
        });

        if (selected === null) {
            showToast("Waktu Habis!");
            speak('انتهى الوقت');
            SoundFx.wrong();
        } else {
            showToast("Salah");
            speak('خطأ');
            SoundFx.wrong();
        }
    }

    setTimeout(nextQuestion, 1500);
}

function updateScore(pts) {
    currentScore += pts;
    localStorage.setItem('arabicScore', currentScore);
    updateProgress();
}

function updateProgress() {
    const bar = document.getElementById('xp-bar');
    const text = document.getElementById('xp-text');

    // Simple level system: Level 1 = 0-100xp
    const level = Math.floor(currentScore / 100) + 1;
    const progress = currentScore % 100;

    if (bar) bar.style.width = `${progress}%`;
    if (text) text.innerText = `Level ${level} - ${currentScore} XP`;
}

// Utilities
function showToast(msg) {
    const container = document.getElementById('toast-container');
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = `<span>ℹ️</span> ${msg}`;
    container.appendChild(el);
    setTimeout(() => el.remove(), 3000);
}


