import {
	ChillingIllustration,
	ConfirmedIllustration,
	DestinationIllustration,
	TravelersIllustration,
} from "@kai/core-assets";

export const slides = [
	{
		id: "slide-1",
		title: "Pesan Tiket di Mana Saja",
		desc: "Dengan menggunakan Access, kamu akan mendapatkan banyak keuntungan. Tidak perlu khawatir lagi untuk memesan dan membatalkan tiket kereta kamu di mana saja.",
		image: { src: ChillingIllustration, ratio: 1.77 / 1 },
	},
	{
		id: "slide-2",
		title: "Trip Planner",
		desc: "Kami akan membuat rekomendasi perjalanan terbaik untuk rencana perjalananmu.",
		image: { src: DestinationIllustration, ratio: 1.4 / 1 },
	},
	{
		id: "slide-3",
		title: "Kelola Tiket Kereta Api Jadi Lebih Mudah",
		desc: "Sekarang kamu bisa mengubah jadwal dan membatalkan tiket kereta di mana saja melalui Access tanpa harus ke stasiun.",
		image: { src: TravelersIllustration, ratio: 1.45 / 1 },
	},
	{
		id: "slide-4",
		title: "E-Boarding Pass",
		desc: "Sekarang kamu tidak perlu antre di stasiun lagi, karena dengan Access, kamu bisa mencetak boarding pass-mu sendiri.",
		image: { src: ConfirmedIllustration, ratio: 0.85 / 1 },
	},
];

export type SlidesType = typeof slides;
export type SlideItemType = SlidesType[number];
