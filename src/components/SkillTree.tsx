```tsx
import React, { useState, useEffect } from 'react';
import { SkillsSchema } from '../types/SkillsTypes';
import { acquireSkill } from '../utils/SkillsUtils';

interface SkillTreeProps {
  characterId: string;
}

const SkillTree: React.FC<SkillTreeProps> = ({ characterId }) => {
  const [skills, setSkills] = useState<SkillsSchema[]>([]);

  useEffect(() => {
    fetchSkillsData(characterId).then(setSkills);
  }, [characterId]);

  const handleSkillAcquisition = (skillId: string) => {
    acquireSkill(characterId, skillId).then((updatedSkills) => {
      setSkills(updatedSkills);
      alert('skillAcquired');
    });
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

export default SkillTree;
```