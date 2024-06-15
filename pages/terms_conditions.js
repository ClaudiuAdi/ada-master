import { Link } from '../components';

const TermsAndConditionsPage = () => (
  <main className="cover min-h-screen px-4 py-8 flex flex-col items-center justify-center">
    <div className="flex flex-col w-full px-4 lg:px-12 py-8 my-8 bg-white rounded-lg max-w-xl">
      <Link href="/login">
        <a className="hover:underline">← Înapoi la pagina de autentificare</a>
      </Link>
      <h2 className="font-bold text-2xl mb-4">Termeni și condiții</h2>
      <h4>
        Obiectivul principal al CSU ASE este de a oferi educație prin sport și de a crește campionii de mâine.
        Credem în studenții și sportivii noștri și ne dorim să îi vedem mereu pe cea mai înaltă treaptă a podiumului.
      </h4>
      <br></br>
      <h4 className='font-semibold'> 1. Clubul are următoarele drepturi: </h4>
      <h3> a) De a verifica și a superviza activitatea Antrenorului;<br></br>
          b) De a deține toate drepturile asupra materialelor, rapoartelor, informațiilor, documentației și a altor materiale scrise,
        create, colectate sau/și produse de Antrenor în perioada desfășurării activităților care fac obiectul prezentului contract;<br></br>
          c) De a exclude Antrenorul din programele și proiectele în care desfășoară activități, dacă acesta nu respectă prevederile
        prezentului contract;<br></br>
        d) De a solicita Antrenorului rapoarte de activitate, planuri de lecție și alte documente care să justifice activitatea sa;<br></br>
        e) De a cere informații și recomandări despre Antrenor, altor persoane.<br></br>
        </h3>
      <h4>
        <br></br>
        <h4 className='font-semibold'> 2. Clubul are următoarele obligații: </h4>
        <h3>
          a) Să-i trateze pe clienti ca și colegi cu drepturi egale; <br></br>
        b) Să asigure Antrenorului un loc unde să-și desfășoare activitatea și accesul la echipamentul și materialele necesare
          derulării activității;<br></br>
          c) Să realizeze grafica pliantelor de selecție pentru fiecare sală în parte;<br></br>
          d) Să asigure Antrenorului bonurile fiscale aferente cotizațiilor lunare și să asigure contabilitatea;<br></br>
        e) Să ramburseze Antrenorului cheltuielile efectuate de acesta în timpul și în legătură cu activitățile ce fac obiectul
        prezentului contract, doar în momentul în care Antrenorul a depus toate documentele justificative în acest sens în termenul
          stabilit;<br></br>
          f) Să ofere Antrenorului suport în realizarea planului de pregătire în primul an de activitate și ori de câte ori este nevoie;<br></br>
          g) Să elibereze Antrenorului documentele care atestă calitatea de Antrenor în cadrul clubului.<br></br>
        h) Să oprească la sursă impozitul de 10% aferent prezentului contract, în baza art. 1.2 și să se ocupe de virarea acestuia la
          Bugetul de Stat.<br></br>
        </h3>
      </h4>
    </div>
  </main>
);

export default TermsAndConditionsPage;
