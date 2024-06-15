import { Link } from '../components';

const ThankYouPage = () => (
  <main className="cover min-h-screen px-4 py-8 flex flex-col items-center justify-center">
    <div className="flex flex-col w-full px-4 lg:px-12 py-8 my-8 bg-white rounded-lg max-w-xl">
      <Link href="/login">
        <a className="hover:underline">← Înapoi la pagina de autentificare</a>
      </Link>
      <h2 className="font-bold text-2xl mb-4">Mulțumim pentru înregistrare! Bine ai venit în club!</h2>
      <img
        className="w-full mb-4"
        src="https://media.giphy.com/media/dmt0NRgroyTPW/giphy.gif"
        alt="Patrick hooray"
      />
      <h3 className="text-lg font-bold mb-4">Înainte:</h3>
      <ol className="list-decimal">
        <li>Vei primi un email de confirmare. Folosește link-ul pentru a-ți confirma contul.</li>
        <li>După ce îți vei confirma contul prin email, vei putea accesa aplicația.</li>
      </ol>
    </div>
  </main>
);

export default ThankYouPage;
