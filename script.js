document.getElementById('data-diri-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('form-section').classList.add('hidden');
    document.getElementById('verification-section').classList.remove('hidden');
});

document.getElementById('verify-button').addEventListener('click', function() {
    const verificationCode = document.getElementById('verification-code').value;
    if (verificationCode === "BanSerep") {
        document.getElementById('verification-section').classList.add('hidden');
        document.getElementById('surat-section').classList.remove('hidden');
        generateSuratLamaran();
    } else {
        alert("Kode verifikasi salah! Silakan coba lagi.");
    }
});

function generateSuratLamaran() {
    const nama = document.getElementById('nama').value;
    const ktp = document.getElementById('ktp').value;
    const tempatLahir = document.getElementById('tempat-lahir').value;
    const tanggalLahir = formatTanggal(document.getElementById('tanggal-lahir').value);
    const agama = document.getElementById('agama').value;
    const telepon = document.getElementById('telepon').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const posisi = document.getElementById('posisi').value;

    const surat = `Kepada Yth.,
HRD ${company}

Dengan hormat,

Sehubungan dengan informasi lowongan kerja yang saya peroleh melalui (sumber informasi, seperti website, media sosial, atau referensi), saya bermaksud untuk mengajukan lamaran kerja di ${company} sebagai ${posisi}.

Saya adalah lulusan Teknik Komputer dan Jaringan (TKJ) dari SMK Mekanik Cibinong, tahun 2025. Selama masa studi, saya telah mempelajari dan menguasai berbagai keterampilan yang relevan dengan bidang jaringan internet, di antaranya:
    1. Konfigurasi dan manajemen jaringan LAN/WAN.
    2. Pengaturan perangkat jaringan seperti router, switch, dan access point.
    3. Instalasi dan pemeliharaan sistem operasi jaringan.
    4. Troubleshooting jaringan untuk memastikan konektivitas yang optimal.
    5. Implementasi keamanan jaringan untuk melindungi data dan informasi.

Selain itu, saya memiliki pengalaman praktis melalui Program Praktik Kerja Lapangan (PKL) di [Nama Perusahaan atau Instansi Tempat PKL], di mana saya bertugas sebagai teknisi jaringan internet. Selama PKL, saya bertanggung jawab untuk:
    1. Melakukan instalasi jaringan internet di berbagai lokasi klien.
    2. Memastikan perangkat jaringan berfungsi dengan baik setelah instalasi.
    3. Melakukan troubleshooting jika terjadi gangguan konektivitas.
    4. Memberikan edukasi dasar kepada klien mengenai penggunaan perangkat jaringan.

Saya memiliki komitmen yang tinggi terhadap pekerjaan, mampu bekerja secara individu maupun dalam tim, dan selalu berusaha untuk terus belajar dan berkembang di bidang teknologi jaringan. Saya yakin dengan keterampilan dan pengalaman yang saya miliki, saya dapat memberikan kontribusi yang positif bagi ${company}.

Berikut adalah data diri saya:
Nama                    : ${nama}
No. KTP                 : ${ktp}
Tempat, Tanggal Lahir   : ${tempatLahir}, ${tanggalLahir}
Agama                   : ${agama}
No. Telepon             : ${telepon}
Email                   : ${email}

Saya sangat berharap dapat diberikan kesempatan untuk berdiskusi lebih lanjut mengenai kontribusi yang dapat saya berikan kepada ${company}. Saya dapat dihubungi melalui telepon di ${telepon} atau email ${email}.

Demikian surat lamaran ini saya buat dengan sebenarnya. Terima kasih atas perhatian dan kesempatan yang diberikan.

Hormat saya,
${nama}`;

    // Menampilkan surat lamaran di halaman
    document.getElementById('surat-content').textContent = surat;

    // Tombol salin surat
    document.getElementById('copy-button').addEventListener('click', function() {
        navigator.clipboard.writeText(surat).then(() => {
            alert("Surat lamaran berhasil disalin!");
        });
    });

    // Tombol mulai ulang
    document.getElementById('restart-button').addEventListener('click', function() {
        location.reload(); // Mereload halaman
    });
}

// Fungsi untuk mengubah format tanggal dari YYYY-MM-DD ke DD NamaBulan YYYY
function formatTanggal(tanggal) {
    const [tahun, bulan, hari] = tanggal.split('-');
    const namaBulan = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    return `${hari} ${namaBulan[parseInt(bulan) - 1]} ${tahun}`;
}

// Update tahun dinamis
document.getElementById('tahun').textContent = new Date().getFullYear();
