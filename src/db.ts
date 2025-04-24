import mysql2 from 'mysql2'

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_sql'
})

// Cek koneksi saat start
db.connect((err) => {
    if (err) {
        console.error('❌ Gagal konek ke MySQL:', err.message);
        return;
    }
    console.log('✅ Koneksi ke MySQL berhasil!');
});

export default db