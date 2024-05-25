import Card from "../Card/Card";

const Special = ({ data }) => {
  return (
    <section id="special" className="container mb-3" style={{border:'1px solid gray' , marginTop:'40px'}}>
      <h2 style={{marginTop:'50px', marginBottom:'20px', fontWeight:'bold'}}>Our Special Dishes</h2>
      <div className="special-body">
        {data.map((element, index) => {
          return <Card key={index} data={element} />;
        })}
      </div>
    </section>
  );
};

export default Special;
