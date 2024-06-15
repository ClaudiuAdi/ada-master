import { fullName } from '../../functions';
import { format } from 'date-fns';

const PlayerInfo = ({ first_name, last_name, birthday, email, category, lessons, matches }) => {
  return (
    <>
      <div className="player-info">
        <div className="flex flex-wrap gap-2 items-center">
        <h3 className="text-3xl text-primary">{fullName({ first_name, last_name })} </h3>
        <div className="hidden sm:flex">
        <div className="text-xs text-white py-1 px-2 rounded uppercase text-center cursor-default font-semibold bg-primary" > Activ </div>
          </div>
          </div>

        {/* YOUR CODE HERE */}
        <div className="flex flex-col w-full px-4 lg:px-7 py-8 my-10 bg-white rounded-lg max-w-xl">
          <div className="grid md:grid-cols-2 gap-4">
          <img className='avatar h-72 w-full md:w-80 rounded-md' src='/images/smile.jpg'
            alt='PlayerPhoto'></img>
            <div className="flex flex-col gap-2">
              <h3 align='right'> <strong> Informații </strong> </h3>

              <div className="flex flex-col">
            <span className='text-primary' align='right' > <strong> Nume: </strong> </span>
            <span align='right'> {last_name} </span>
            </div>

              <div className="flex flex-col">
              <span className='text-primary' align='right'> <strong> Prenume: </strong> </span>
          <span align='right'> {first_name} </span>
              </div>

              <div className="flex flex-col">
              <span className='text-primary' align='right'> <strong> Data nașterii: </strong> </span>
          <span align='right'>{format(new Date(birthday), 'dd-MM-yyyy')} </span>
              </div>

              <div className="flex flex-col">
              <span className='text-primary' align='right'> <strong> Contact: </strong> </span>
          <span align='right'> {email} </span>
              </div>

              <div className="flex flex-col">
              <span className='text-primary' align='right'> <strong> Categorie sportivă: </strong> </span>
                <span align='right'> {category} </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <span className='text-primary' align='left'> <strong> Lectii: </strong> </span>
          <span align='right'> {lessons.map(lessons => <div>{lessons.name} </div>)} </span>
        </div>
        <div className="flex flex-col">
          <span className='text-primary' align='left'> <strong> Meciuri: </strong> </span>
          <span align='right'> {matches.map(matches => <div>{matches._id}</div>)} </span>
        </div>
      </div>
    </>
  );
};

export default PlayerInfo;
