<?php
/*
* Plugin Name: Social Media Menu Icons
* Author: Russell Fair
* Description: Adds social menu icons to a WordPress Nav Menu
*/

add_action('init', 'smmi_register_styles');
function smmi_register_styles(){
    $version = (int) '203';
    wp_register_style('smmi', plugins_url( 'lib/css/smmi.css' , __FILE__ ), array(), $version, 'screen');
}

add_action('wp_print_scripts', 'smmi_output_css');
function smmi_output_css(){
    wp_enqueue_style('smmi');
}
