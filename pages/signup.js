import { Link } from '../components';
import { SignupForm } from '../components/Forms';

const SignupPage = () => (
  <main className="cover min-h-screen px-4 py-8 flex flex-col items-center justify-center">
    <div className="w-full px-4 lg:px-12 py-8 my-8 bg-white rounded-lg max-w-xl">
      <Link href="/login">
        <a className="hover:underline">← Înapoi la pagina de autentificare</a>
      </Link>
      <h2 className="font-bold text-2xl mb-4">Crează un cont nou</h2>
      <SignupForm />
    </div>
  </main>
);

export default SignupPage;
