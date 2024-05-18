// Render header ==========
const header = document.getElementById('header');

function createMarkup() {
  return `<!-- Тут вместо img вставить svg логотип -->
	<img src="../../img/logo/logo.png" alt="Liarton store logo" class="header-logo">
	<div class="menu-icon" id="menu-icon">
		<div class="menu-icon-element"></div>
		<div class="menu-icon-element"></div>
		<div class="menu-icon-element"></div>
	</div>
	<nav class="page-navigation" id="page-navigation">
		<!-- Тут вместо img вставить svg логотип -->
		<img src="../../img/logo/logo.png" alt="Liarton store logo" class="header-logo">
		<ul class="navigation-list">
			<li class="navigation-list-item">
				<a href="" class="navigation-list-item-link">Strona główna</a>
			</li>
			<li class="navigation-list-item">
				<a href="" class="navigation-list-item-link">Wystawa</a>
			</li>
			<li class="navigation-list-item">
				<a href="" class="navigation-list-item-link">Jak złożyć zamówienie?</a>
			</li>
			<li class="navigation-list-item">
				<a href="" class="navigation-list-item-link">O nas</a>
			</li>
			<li class="navigation-list-item">
				<a href="" class="navigation-list-item-link">Kontakt</a>
			</li>
		</ul>
		<div class="social-box">
			<!-- Instagram -->
			<a href="" class="social-links">
				<!-- Тут вместо img вставить svg иконку -->
				<img src="../../img/icons/inst.png" alt="Instagram social page icon" class="social-links-icon">
			</a>
			<!-- Facebook -->
			<a href="" class="social-links">
				<!-- Тут вместо img вставить svg иконку -->
				<img src="../../img/icons/fb.png" alt="Facebook social page icon" class="social-links-icon">
			</a>
			<!-- Mail -->
			<a href="" class="social-links">
				<!-- Тут вместо img вставить svg иконку -->
				<img src="../../img/icons/gm.png" alt="Gmail icon" class="social-links-icon">
			</a>
		</div>
		<div class="partner-box">
			<h3 class="partner-title">Partnerzy projektu: </h3>
			<a href="" class="partner-link">
				<!-- Тут вместо img вставить svg логотип -->
				<img src="../../img/logo/szkarpietkapl-logo.png" alt="" class="partner-link-logo">
			</a>
		</div>
	</nav>`;
}

const markup = createMarkup();

function renderHeader() {
  header.innerHTML = markup;
}

renderHeader();
// ========== Render header end



// Header functionality ==========
// Open/Close menu ++++++++++
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu-icon');
  const navigation = document.getElementById('page-navigation');
  let touchStartX = 0;

  if (!menu || !navigation) {
    console.error('Required elements not found in the DOM');
    return;
  }

  const toggleMenu = () => {
    const isOpen = navigation.classList.toggle('open');
    navigation.style.transform = isOpen ? 'translateX(-100%)' : 'translateX(0)';
  };

  menu.addEventListener('click', toggleMenu);

  navigation.addEventListener('touchstart', e => (touchStartX = e.touches[0].clientX));

  navigation.addEventListener('touchend', e => {
    if (e.changedTouches[0].clientX - touchStartX > 50) {
      navigation.classList.add('closing');
      navigation.style.transform = 'translateX(0)';
      setTimeout(() => navigation.classList.remove('open', 'closing'), 300);
    }
  });
});
// ++++++++++ Open/Close menu end
