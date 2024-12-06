// Fungsi untuk menampilkan laptop
const displayLaptops = (filteredLaptops = laptop) => {
  const laptopList = document.getElementById("laptopList");
  laptopList.innerHTML = ""; // Kosongkan daftar laptop sebelum menampilkan yang baru

  filteredLaptops.forEach((laptop) => {
    const laptopItem = document.createElement("div");
    laptopItem.classList.add("product-card");

    laptopItem.innerHTML = `
          <div class="product-image">
              <img src="${laptop.url_img}" alt="gambar ${laptop.brand} ${
      laptop.type
    }" />
          </div>
          <div class="product-content">
              <h3>${laptop.brand} ${laptop.type}</h3>
              <div class="product-info">
                  <p>processor: ${laptop.processor}</p>
                  <p>ram: ${laptop.ram}</p>
                  <p>storage: ${laptop.storage}</p>
                  <p>display: ${laptop.layar}</p>
                  <p>kondisi: ${laptop.kondisi}</p>
                  <p>keterangan: ${laptop.keterangan}</p>
              </div>
              <div class="product-price">
                  IDR ${laptop.discount.toLocaleString(
                    "id-ID"
                  )} <span>IDR ${laptop.price.toLocaleString("id-ID")}</span>
              </div>
              <div class="product-buy">
                <a href="https://wa.me/62895325199505?text=Hay admin DarBis saya mau beli laptop ${
                  laptop.brand
                } ${
      laptop.type
    }" target="_blank" class="item-detail-button">Beli Sekarang</a>
              </div>
        `;

    laptopList.appendChild(laptopItem);
  });
};

// Fungsi untuk melakukan pencarian laptop
const searchLaptops = () => {
  const searchInput = document.getElementById("search-box").value.toLowerCase();
  console.log("Searching for:", searchInput); // Debugging

  const filteredLaptops = laptop.filter((laptop) => {
    return (
      laptop.brand.toLowerCase().includes(searchInput) ||
      laptop.type.toLowerCase().includes(searchInput) ||
      laptop.processor.toLowerCase().includes(searchInput)
    );
  });

  console.log("Filtered laptops:", filteredLaptops); // Debugging

  // Tampilkan laptop yang sudah difilter
  displayLaptops(filteredLaptops);

  // Scroll ke bagian produk setelah pencarian
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
};

// Event listener untuk live search
document.querySelectorAll("#search-box").forEach((input) => {
  input.addEventListener("input", (e) => {
    searchLaptops();
  });
});

// Panggil fungsi untuk menampilkan semua laptop saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  displayLaptops(); // Memanggil fungsi untuk menampilkan laptop
});
