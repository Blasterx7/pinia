<template>
    <button type="submit">
        <slot></slot>
    </button>
</template>

<style>
button{
    padding: 10px;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 2px;
}

button:hover{
    background-color: white;
    border: 1px solid white;
}
</style>