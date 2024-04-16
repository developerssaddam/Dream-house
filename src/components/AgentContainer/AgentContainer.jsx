import SectionTitle from "../SectionTitle/SectionTitle";
import Agent from "../Agent/Agent";

const AgentContainer = () => {
  return (
    <>
      <SectionTitle
        title="Meet Our Agents"
        subtitle="Our Agents are here to help you"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <Agent
          image="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg"
          name="Arling Tracy"
        />
        <Agent
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfq3dneguiF8RGj4tlXJ7jIlBy8IgUcE03dT8hdyeufGA5rH98fiNEJVTjCwdhb3aHfk&usqp=CAU"
          name="Katy Grace"
        />
        <Agent
          image="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
          name="Mark Web"
        />
        <Agent
          image="https://agighana.org/wp-content/uploads/2019/08/team-member-02.jpg"
          name="Nina Thomas"
        />
        <Agent
          image="https://www.columbuspm.org/wp-content/uploads/2015/09/team-member-sample.jpg"
          name="Katy Grace"
        />
      </div>
    </>
  );
};

export default AgentContainer;
