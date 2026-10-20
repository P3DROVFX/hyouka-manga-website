import Link from "next/link";

export default function NotFound() {
	return (
		<main>
			<p>404</p>
			<h1>Página não encontrada</h1>
			<p>
				A página que você procura não existe ou foi removida.
			</p>
			<Link
				href="/"
				className=""
			>
				Voltar para a home
			</Link>
		</main>
	);
}
