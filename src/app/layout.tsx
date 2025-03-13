import { PrismicPreview } from "@prismicio/next"
import { repositoryName } from "@/prismicio"
import "./globals.css"

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			// className={alpino.variable}
			className="font-alpino font-extrabold"
		>
			<body>{children}</body>
			<PrismicPreview repositoryName={repositoryName} />
		</html>
	)
}
