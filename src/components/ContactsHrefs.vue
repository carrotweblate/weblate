
<template>
	<div class="ContactsHrefs d-flex w-100">
		<div class="ContactsHrefs__phone flex-grow-1 mt-2 mb-3 m-md-0">
			Позвоните по телефону:<br>
			<a href="tel:+74951059169">+7 (495) 105 91 69</a>
		</div>
		<div class="ContactsHrefs__icons d-flex">
			<div class="ContactsHrefs__icon">
				<a href="https://m.me/carrotquest" aria-label="Facebook">
					<svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.95163H2.91342V4.48492C2.91342 1.56972 4.70984 0 7.2922 0C8.15804 0 8.9687 0.0551076 9.45337 0.0880548C9.66004 0.102103 9.80743 0.112123 9.87455 0.112123V3.13944H8.07813C6.61854 3.13944 6.39399 3.81218 6.39399 4.82129V6.95163H9.76228L9.31317 10.3153H6.39399V19.076H2.91342V10.3153H0V6.95163Z" fill="#FF7C16"/>
					</svg>
				</a><br>
				<a href="https://m.me/carrotquest">
					Фейсбук
				</a>
			</div>
			<div class="ContactsHrefs__icon mx-3">
				<a href="tg://resolve?domain=carrotquestbot" aria-label="Telegram">
					<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.7196 16.0413L19.6529 2.19645C19.7507 1.61554 19.7507 1.22827 19.4574 0.937823C19.164 0.647372 18.8707 0.647372 18.4796 0.841006L0.879981 7.42457C0.586654 7.6182 0.293327 7.71502 0.0977757 7.90865C0 8.19911 0 8.29592 0 8.48956C0.0977757 8.58637 0.293327 8.78001 0.68443 8.87682L5.18211 10.2323L15.6441 3.6487C15.9374 3.45507 16.133 3.45507 16.3285 3.55188C16.4263 3.6487 16.4263 3.6487 16.2308 3.84234L7.82205 11.4909L7.43095 16.1381C7.72428 16.1381 8.01761 16.0413 8.40871 15.7508L10.5598 13.6209L15.0575 16.9126C15.9374 17.3967 16.4263 17.1063 16.7196 16.0413Z" fill="#FF7C16"/>
					</svg>
				</a><br>
				<a href="tg://resolve?domain=carrotquestbot">
					Телеграм
				</a>
			</div>
			<div class="ContactsHrefs__icon">
				<a href="#open-chat" aria-label="Carrot quest chat">
					<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 2.71797C0 0.905555 1 0 3 0H15C17 0 18 0.905555 18 2.71667V9.96111C18 11.7722 17 12.6778 15 12.6778H6C5.33333 13.2815 3.52632 14.7737 2 16.3C1 17.3 0 16.3 0 15.5V2.71797Z" fill="#FF7C16"/>
						<circle cx="5" cy="6.5" r="1" fill="white"/>
						<circle cx="9" cy="6.5" r="1" fill="white"/>
						<circle cx="13" cy="6.5" r="1" fill="white"/>
					</svg>
				</a><br>
				<a href="#open-chat">
					Чат на сайте
				</a>
			</div>
		</div>
	</div>
</template>


<style lang="scss">
	.ContactsHrefs {
		&__icon {
			text-align: center;
		}
		@media (max-width: 767.98px) {
			flex-wrap: wrap;
			.flex-grow-1 {
				width: 100%;
			}
			&__icon {
				display: flex;
				a {
					margin-right: 0.5rem;
				}
			}
		}
		@media (max-width: 1199.98px) {
			.flex-grow-1 {
				text-align: left;
			}
		}
	}
</style>