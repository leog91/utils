const arm = { finger: { nailType: "long" } };

const person = { body: "head", arms: [arm, "rigthArm"] };

console.log(JSON.stringify(person));

const { arms } = person;

const {
  arms: [{ arm1 }, arm2]
} = person;

console.log("arms", arms);

console.log("nailType", arm1, arm2);
