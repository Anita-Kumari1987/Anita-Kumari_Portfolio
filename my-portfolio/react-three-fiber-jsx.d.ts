import { Object3DNode } from "@react-three/fiber";
import * as THREE from "three";

declare module "@react-three/fiber" {
  interface ThreeElements {
    mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
    planeGeometry: Object3DNode<
      THREE.PlaneGeometry,
      typeof THREE.PlaneGeometry
    >;
    shaderMaterial: Object3DNode<
      THREE.ShaderMaterial,
      typeof THREE.ShaderMaterial
    >;
  }
}
