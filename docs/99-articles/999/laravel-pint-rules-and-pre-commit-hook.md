# Laravel Pint rules and pre-commit hook

1. Install [Laravel Pint](https://laravel.com/docs/10.x/pint#main-content).
2. Add `pint.json`:

    ```json
    {
        "preset": "laravel",
        "rules": {
            "control_structure_continuation_position": {
                "position": "next_line"
            }
        }
    }
    ```

3. Create `git-hooks/pre-commit`:

    ```bash
    #!/bin/sh
    
    # Any subsequent(*) commands which fail will cause the shell script to exit immediately
    set -e
    
    # Fix PHP styles
    vendor/bin/pint --dirty
    
    # Include changes made by Pint into this commit. Without this line, the style changes
    # will stay uncommitted.
    git add .
    ```

4. Install the hook:

    ```bash
    chmod a+x git-hooks/*
    cp git-hooks/* .git/hooks/
    ```

5. Add this to the [installation instructions](https://github.com/osmianski/docs).
