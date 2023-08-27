```tsx
import React, { useState, useEffect } from 'react';
import { SkillsSchema } from '../types/SkillsTypes';
import { acquireSkill } from '../utils/SkillsUtils';
import { fetchSkillsData } from '../api/SkillsAPI';

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<SkillsSchema[]>([]);

  useEffect(() => {
    fetchSkillsData().then((data) => setSkills(data));
  }, []);

  const handleSkillAcquisition = (skillId: string) => {
    acquireSkill(skillId).then((updatedSkills) => setSkills(updatedSkills));
  };

  return (
    <div id="skills-tree">
      {skills.map((skill) => (
        <div key={skill.id}>
          <h3>{skill.name}</h3>
          <p>{skill.description}</p>
          <button onClick={() => handleSkillAcquisition(skill.id)}>
            Acquire Skill
          </button>
        </div>
      ))}
    </div>
  );
};

export default Skills;
```