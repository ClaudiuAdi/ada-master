import { Menu, MenuButton } from '../../components';
import { Dropdown } from '../../components/Fields';
import { countries } from '../../data';

const Page = () => {
  const showCountries = (country) => (
    <option key={country.value} value={country.value}>
      {country.label}
    </option>
  );

  return (
    <div className="font-body text-sm min-h-screen bg-gray-100 flex">
      <Menu />
      <main className="max w-full lg:col-span-5 p-4 lg:p-8 xl:px-12">
        <div className="flex items-center mb-12">
          <div className="flex flex-1">
            <h3 className="text-2xl font-semibold">Dropdown</h3>
          </div>
          <MenuButton />
        </div>
        <div className="grid gap-4">
          <div className="bg-white rounded border border-gray-300 p-6">
            <div className="prose-sm">
              <p>
                <strong>Looks like a HTML select, but it's not a HTML select</strong>
                <br />
                Dropdown elements are an extended version of the HTML select based on the awesome
                NPM package <code>downshift</code>
              </p>

              <div className="mb-4 w-80">
                <label htmlFor="#" className="cursor-pointer mb-0">
                  Simple dropdown
                </label>
                <Dropdown>
                  <option value="marguerita">Pizza marguerita</option>
                  <option value="salami">Pizza salami</option>
                  <option value="capriciosa">Pizza capriciosa</option>
                </Dropdown>
              </div>

              <div className="mb-4 w-80">
                <label htmlFor="#" className="cursor-pointer mb-0">
                  Dropdown with countries
                </label>
                <Dropdown>{countries.map(showCountries)}</Dropdown>
              </div>

              <div className="mb-4 w-80">
                <label htmlFor="#" className="cursor-pointer mb-0">
                  Country dropdown with placeholder
                </label>
                <Dropdown placeholder="Select a country">{countries.map(showCountries)}</Dropdown>
              </div>

              <div className="mb-4 w-80">
                <label htmlFor="#" className="cursor-pointer mb-0">
                  Country dropdown with default selection
                </label>
                <Dropdown defaultSelected="DEU">{countries.map(showCountries)}</Dropdown>
              </div>

              <div className="mb-4">
                <label htmlFor="#" className="cursor-pointer mb-0">
                  Country dropdown with placeholder and default selection
                </label>
                <div className="w-80">
                  <Dropdown defaultSelected="USA" placeholder="Select a country">
                    {countries.map(showCountries)}
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  // hide page on production environments
  if (process.env.NODE_ENV === 'production') {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}

export default Page;
