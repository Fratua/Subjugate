import React, { useState, useEffect } from 'react';
import { gameLogic } from '../utils/gameLogic';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    const fetchedSkills = await gameLogic.getSkills();
    setSkills(fetchedSkills);
  };

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill);
  };

  const handleSkillUpgrade = async () => {
    if (selectedSkill) {
      const upgradedSkill = await gameLogic.upgradeSkill(selectedSkill);
      setSkills(skills.map(skill => skill.id === upgradedSkill.id ? upgradedSkill : skill));
    }
  };

  return (
    <div id="skillsTree">
      <h2>Your Skills</h2>
      <div className="skills-list">
        {skills.map(skill => (
          <div key={skill.id} className="skill" onClick={() => handleSkillSelect(skill)}>
            <h3>{skill.name}</h3>
            <p>Level: {skill.level}</p>
          </div>
        ))}
      </div>
      {selectedSkill && (
        <div className="selected-skill">
          <h3>Selected Skill: {selectedSkill.name}</h3>
          <button onClick={handleSkillUpgrade}>Upgrade Skill</button>
        </div>
      )}
    </div>
  );
};

export default Skills;