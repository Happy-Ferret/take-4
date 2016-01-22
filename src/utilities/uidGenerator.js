
class UIDGenerator {
  constructor(startIndex) {
    this.currentUID = startIndex;
  }

  gimmeUID() {
    this.currentUID++;
    return this.currentUID;
  }

}

export default UIDGenerator;
