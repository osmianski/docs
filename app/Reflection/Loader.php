<?php

namespace App\Reflection;

class Loader
{
    public function __construct(protected array $paths)
    {
    }

    public function getClasses(): array
    {
        $classes = [];

        foreach ($this->paths as $namespace => $path) {
            $classes = array_merge($classes, $this->getClassesFromPath($namespace, $path));
        }

        return $classes;
    }

    protected function getClassesFromPath(string $namespace, string $path): array
    {
        $classes = [];

        foreach (scandir($path) as $file) {
            if (in_array($file, ['.', '..'])) {
                continue;
            }

            $fullPath = $path.'/'.$file;

            if (is_dir($fullPath)) {
                $classes = array_merge($classes, $this->getClassesFromPath($namespace.'\\'.$file, $fullPath));
            }
            else {
                $classes[] = $namespace.'\\'.pathinfo($file, PATHINFO_FILENAME);
            }
        }

        return $classes;
    }
}
