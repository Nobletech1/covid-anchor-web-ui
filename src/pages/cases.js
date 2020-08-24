import fetch from "isomorphic-unfetch";
import {useState}from "react";
import Layout from "../components/Layout";
import Case from "../components/Case";



function Cases({cases}) {
 return (
    <Layout title="Cases | Convid Anchor">
     <div                                                                                                                       lassName="content">
     <h1>Cases Page</h1>
     {/* List of cases */}
     <div className="cases">
       
       {cases.map((item, key) => <Case key={key}caseData={item}/>)}
       </div>


       {/* Styling */}

       <style jsx>{`
                .content{
                  width:100%;
                  height:100%;

                  
                }

                .cases{
                  font-size:20px;
                  color:green;
                  width:100%;
                  height:100%;
                  display:grid;
                  flex-grow:1;
                  padding:4rem;
                  display:grid;
                  grid-template-columns:repeat(auto-fit,minmax(30rem,1fr));
                  gap:4rem;
                  animation:anim;
                  animation-duration:5s;
                }

                @keyframes anim{
               0%{
                 opacity:0;

               }
                100%{
                  opacity:1;
                  transform:translateY(-60%)
                }


                }
                `}</style>
      </div>

    
    </Layout>
  );
}



// Get Cases
const Case_API="http://localhost:5000";
export async function getStaticProps(){
 const response=await fetch(Case_API);
  const cases =await response.json();

  return {
    props: {
      cases,
    }
  }
};
export default Cases;


