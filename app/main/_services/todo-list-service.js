import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";

export async function getTodos() {
  const todosCollection = collection(db, "todos");
  const todosSnapshot = await getDocs(todosCollection);
  const todosList = todosSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  return todosList;
}

export async function addTodo(todo) {
  const todosCollection = collection(db, "todos");
  const docRef = await addDoc(todosCollection, todo);
  return docRef.id;
}

export async function deleteTodo(todoId) {
  const todoDoc = doc(db, "todos", todoId);
  await deleteDoc(todoDoc);
}

export async function updateTodo(todoId, updatedTodo) {
  const todoDoc = doc(db, "todos", todoId);
  await updateDoc(todoDoc, updatedTodo);
}