import Link from 'next/link';
import { useRef, useState } from 'react';
import { Overlay } from 'react-bootstrap';

const Fab = ({ href, icon = 'fa fa-plus-circle', title }) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Link href={href}>
        <a
          className={`menu-item px-8 py-2 cursor-pointer no-underline fixed
            z-90
            top-8
            right-8
            drop-shadow-lg
            flex justify-center items-center
            hover:drop-shadow-2xl hover:animate-bounce
            duration-300`}
          ref={target}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <i className={icon + ' fa-4x text-accent hover:drop-shadow-2xl'} />
        </a>
      </Link>
      <Overlay target={target.current} show={show} placement="left">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            className="bg-accent"
            style={{
              position: 'absolute',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            {title}
          </div>
        )}
      </Overlay>
    </>
  );
};

export default Fab;
