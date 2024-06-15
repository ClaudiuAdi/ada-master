import { fullName } from '../../functions';
import { format } from 'date-fns';

const PlayerInfo = ({
  name,
  birthday,
  email,
  category,
  lessons,
  matches,
  last_name,
  first_name,
}) => {
  return (
    <>
      <div className="player-info">
        <div className="flex flex-wrap gap-2 items-center">
          <h3 className="text-3xl text-primary">
            Bine ai venit, {name || `${last_name} ${first_name}`}
          </h3>
          <div className="hidden sm:flex">
            <div className="text-xs text-white py-1 px-2 rounded uppercase text-center cursor-default font-semibold bg-primary">
              {' '}
              Activ{' '}
            </div>
          </div>
        </div>

        {/* YOUR CODE HERE */}
        <div className="flex flex-col w-full px-4 lg:px-7 py-8 my-10 bg-white rounded-lg max-w-xl">
          <div className="grid md:grid-cols-2 gap-4">
            <img
              className="avatar h-72 w-full md:w-80 rounded-md"
              src="/images/smile.jpg"
              alt="PlayerPhoto"
            ></img>
            <div className="flex flex-col gap-2">
              <h3 align="right">
                {' '}
                <strong> Informații </strong>{' '}
              </h3>

              <div className="flex flex-col">
                <span className="text-primary" align="right">
                  {' '}
                  <strong> Nume si prenume: </strong>{' '}
                </span>
                <span align="right"> {name || `${last_name} ${first_name}`} </span>
              </div>

              <div className="flex flex-col">
                <span className="text-primary" align="right">
                  {' '}
                  <strong> Contact: </strong>{' '}
                </span>
                <span align="right"> {email} </span>
                {/*<span className='text-primary' align='right'> <strong> Data nasterii: </strong> </span>*/}
                {/*<span align='right'> {new Date(birthday).getFullYear} </span>*/}
                <span className="text-primary" align="right">
                  {' '}
                  <strong> Categorie: </strong>{' '}
                </span>
                <span align="right"> {category} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerInfo;
