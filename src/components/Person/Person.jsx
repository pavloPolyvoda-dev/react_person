export const Person = ({ person }) => {
  let partnerStatus = '';

  if (person.sex === 'm') {
    partnerStatus = 'wife';
  } else {
    partnerStatus = 'husband';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>

      {person.age && <p className="Person__age">I am {person.age}</p>}

      {person.isMarried ? (
        <p className="Person__partner">
          {person.partnerName} is my {partnerStatus}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
