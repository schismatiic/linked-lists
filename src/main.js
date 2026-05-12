import { LinkedList } from "./LinkedList.js";
import { Node } from "./Node.js";

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.insertAt(3, 11, 22);
list.toString();
