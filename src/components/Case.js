function Case({caseData}) {
    return (
        <div className="case">
            <h2>{caseData.country}</h2>
            <p>Total Cases:{caseData.c}</p>
            <p>Active Cases:{caseData.active}</p>
            <p>Recovered Cases:{caseData.recovered}</p>
            <p>Death Cases:{caseData.deaths}</p>
 {/* Styling */}

<style jsx>{`
   .case{
 height:30rem;
 padding:3rem;
 background-color:var(--color-primary);

  }
     `}</style>
 </div>
    );
}

export default Case;