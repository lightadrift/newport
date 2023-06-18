const StatesArray = [
  { key: "right", value: false },
  { key: "left", value: false },
  { key: "foward", value: false },
  { key: "backward", value: false },
  { key: "jump", value: false },
];

interface KeyState {
  subscribeKeys: any;
  getKeys: () => any;
}

export const useControls = (values: KeyState, player: any) => {
  const keys = values.getKeys();

  const Jump = () => {

  }
  const Run = () => {
    
  }
};
