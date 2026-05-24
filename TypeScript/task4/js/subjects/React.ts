namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }
  class React extends Subject {
    getRequirements(): string {
      return `Here is a list of requirements for Cpp`;
    }

    getAvailableTeacher(): string {
      if (!this.teacher || !this.teacher.experienceTeachingReact) {
        return `No available teacher`;
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
