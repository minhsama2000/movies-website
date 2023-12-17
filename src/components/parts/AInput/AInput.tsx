import "./ainput.module.scss"

interface InputType {
  type: string;
}

export default function AInput({ props }: { props: InputType }) {
  return (
    <>
      <input type={props.type}  />
    </>
  );
}
