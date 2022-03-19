<?php
    class Usuario extends Conectar{
        public function get_login($usu_correo,$usu_pass){
            $conectar = parent::conexion();
            parent::set_names();
            $sql="select * from usuarios where correo=$usu_correo and pass=$usu_pass";
            $sql=$conectar->prepare($sql);
            // $sql->bindValue(1, $usu_correo);
            // $sql->bindValue(2, $usu_pass);
            $sql->execute();
            return $resultado=$sql->fetchAll();
        }

        public function get_login_social($usu_correo){
            $conectar = parent::conexion();
            parent::set_names();
            $sql="select * from usuarios where correo=$usu_correo";
            $sql=$conectar->prepare($sql);
            // $sql->bindValue(1, $usu_correo);
            $sql->execute();
            return $resultado=$sql->fetchAll();
        }

        public function register_usuario($usu_nom,$usu_correo,$usu_pass){
            $conectar = parent::conexion();
            parent::set_names();
            $sql="INSERT INTO `usuarios` (id,nombres,correo,pass,estado) VALUES (NULL,$usu_nom,$usu_correo,$usu_pass,'1');";
            $sql=$conectar->prepare($sql);
            // $sql->bindValue(1, $usu_nom);
            // $sql->bindValue(2, $usu_correo);
            // $sql->bindValue(3, $usu_pass);
            $sql->execute();
            return $resultado=$sql->fetchAll();
        }

        public function get_correo($usu_correo){
            $conectar = parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM `usuarios` WHERE correo =$usu_correo AND estado='1'";
            $sql=$conectar->prepare($sql);
            // $sql->bindValue(1, $usu_correo);
            $sql->execute();
            return $resultado=$sql->fetchAll();
        }
    }
?>