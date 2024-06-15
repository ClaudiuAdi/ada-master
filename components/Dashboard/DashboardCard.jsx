const DashboardCard = ({ children, icon, title, onClick }) => (
  <div className="relative bg-primary text-white p-4 rounded-md cursor-pointer" onClick={onClick}>
    <div className="absolute -top-2 -right-2 p-2 rounded-md bg-white text-primary border-primary border-1 flex items-center justify-center">
      <i className={icon+' fa-2x'} />
    </div>
    <h3 className="font-bold text-lg mb-4">{title}</h3>
    {children}
  </div>
);

export default DashboardCard;
