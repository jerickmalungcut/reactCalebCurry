import EditEmployee from "./EditEmployee";

function Employee(props) {
  return (
    <>
      <div className="flex flex-wrap gap-5 mx-4 py-6 px-10 drop-shadow-xl bg-gray-100 max-w-[350px] min-w-[350px]">
        <img
          src={props.img}
          alt="profile"
          className="w-[100px] h-[100px] rounded-full object-cover"
        />
        <div className="flex flex-col gap-y-1">
          <h4 className="text-lg font-bold">{props.name}</h4>
          <p className="uppercase text-sm text-gray-400 tracking-wider">
            {props.position}
          </p>
          <EditEmployee
            id={props.id}
            name={props.name}
            position={props.position}
            newEmployee={props.newEmployee}
          />
        </div>
      </div>
    </>
  );
}

export default Employee;
