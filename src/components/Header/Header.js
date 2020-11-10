import Switch from "./../Switch/Switch";

function Header({ logo }) {
  return (
    <div className="bg-blue-600 flex justify-between items-center py-6">
      <h1 className="font-black text-2xl text-white">{logo}</h1>
      <div className="flex items-center">
        <span className="text-white">Day</span>
        <Switch bgColor="bg-white" switchColor="bg-green-600" />
        <span className="text-white">Night</span>
      </div>
    </div>
  );
}

export default Header;
