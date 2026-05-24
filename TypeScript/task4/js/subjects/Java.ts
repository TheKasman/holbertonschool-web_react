namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }
  class Java extends Subject {
    getRequirements(): string {
      return `Here is a list of requirements for Java`;
    }

    getAvailableTeacher(): string {
      if (!this.teacher || !this.teacher.experienceTeachingJava) {
        return `No available teacher`;
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}

