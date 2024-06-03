interface LabelProps {
  htmlFor: string;
  value: string;
}

export function Label({ htmlFor, value }: LabelProps) {
  return <label htmlFor={htmlFor}>{value}</label>;
}
