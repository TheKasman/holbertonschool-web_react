namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }
  class Cpp extends Subject {
    getRequirements(): string {
      return `Here is a list of requirements for Cpp`;
    }

    getAvailableTeacher(): string {
      if (!this.teacher || !this.teacher.experienceTeachingC) {
        return `No available teacher`;
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
