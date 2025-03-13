import { PrismicPreview } from "@prismicio/next"
import { repositoryName } from "@/prismicio"
import "./globals.css"
import Header from "@/components/Header"

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			// className={alpino.variable}
			className="font-alpino"
		>
			<body className="overflow-x-hidden bg-yellow-300">
				<Header />
				<main>{children}</main>
			</body>
			<PrismicPreview repositoryName={repositoryName} />
		</html>
	)
}
